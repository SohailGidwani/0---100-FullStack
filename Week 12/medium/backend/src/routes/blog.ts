import { Hono } from "hono";
import { decode,sign,verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { updatePostInput,createPostInput } from "@sohailgidwani05/medium-common";

// -------------Binding and Variables---------------------------------------
export const blogRouter = new Hono<{
	Bindings: {
	DATABASE_URL: string,
    JWT_SECRET: string,
	}
  Variables : {
		userId: string
	}
}>();


// --------------------Middlewares-----------------------------------------
blogRouter.use('/*', async(c, next)=>{
    try{

        const jwt = c.req.header('Authorization') || "";
        if(!jwt){
            c.status(401);
            return c.json({error:"Unauthorized"});
        }
        const token = jwt.split(' ')[1];
        const payload = await verify(token, c.env.JWT_SECRET);
    if(!payload){
      c.status(401);
      return c.json({error:"Unathourized"});
    }
    console.log("Verified")
    c.set('userId', payload.id);
    await next()
    }
    catch(e){
        c.status(401);
        return c.json({error:"Unathourized"});
    }   
});

// ---------------------Routes-------------------------------------
blogRouter.post('/', async (c)=> {
    const body = await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate()); //IMP when using a connection pool
    const { success } = createPostInput.safeParse(body);
    if (!success){ 
        c.status(411);
        return c.json({error: "Invalid inputs"});
    }
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: c.get('userId')
        }
    })
    return c.json({
        id : post.id
    })
  })
  blogRouter.put('/', async (c)=> {
    const body = await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate()); //IMP when using a connection pool
    const { success } = updatePostInput.safeParse(body);
    if (!success){ 
        c.status(411);
        return c.json({error: "Invalid inputs"});
    }
    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id : post.id
    })
  })
  blogRouter.get('/bulk', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const posts = await prisma.post.findMany({
        select:{
            content : true,
            title : true,
            id : true,
            author : {
                select:{
                    name : true
                }
            }
        }
    });
    return c.json({
        posts
    })
  })
  blogRouter.get('/:id', async (c)=> {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate()); //IMP when using a connection pool
    try{
        const post = await prisma.post.findFirst({
            where: {
                id: id
            }
        })
        return c.json({
            post
        })
    }
    catch(e){
        c.status(411);
        return c.json({
            message: "Error while fetching the blog post"
        })
    }
  })
