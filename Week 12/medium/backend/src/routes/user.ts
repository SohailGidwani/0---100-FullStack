import { Hono } from "hono";
import { decode,sign,verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signupInput,signinInput } from "@sohailgidwani05/medium-common";

// -------------Binding and Variables---------------------------------------
export const useRouter = new Hono<{
	Bindings: {
	DATABASE_URL: string,
    JWT_SECRET: string,
	}
  Variables : {
		userId: string
	}
}>();

// --------------------Middlewares-----------------------------------------
// useRouter.use('/*', async(c, next)=>{
//     const jwt = c.req.header('Authorization');
//     if(!jwt){
//       c.status(401);
//       return c.json({error:"Unauthorized"});
//     }
//     const token = jwt.split(' ')[1];
//     const payload = await verify(token, c.env.JWT_SECRET);
//     if(!payload){
//       c.status(401);
//       return c.json({error:"Unathourized"});
//     }
//     console.log("Verified")
//     c.set('userId', payload.id);
//     await next()
//   });

// ---------------------Routes-------------------------------------
useRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success){ 
        c.status(411);
        return c.json({error: "Invalid inputs"});
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate()); //IMP when using a connection pool
	try {
		const user = await prisma.user.create({
			data: {
				name:body.name,
				email: body.email,
				password: body.password
			}
		});
    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
		return c.json({jwt});
	} catch(e) {
		return c.json({error: "error while signing up"});
	}
})

useRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success){ 
        c.status(411);
        return c.json({error: "Invalid inputs"});
    }
	try{
		const user = await prisma.user.findUnique({
			where: {
				email: body.email,
				password: body.password
			}
		});
		
		if (!user) {
			c.status(403);
			return c.json({ error: "user not found" });
		}
		
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	}
	catch(e){
		console.log(e);
		c.status(411);
		return c.text("Invalid!");
	}
})
