import { Hono } from 'hono'
import { decode,sign,verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
// -------------Binding and Variables---------------------------------------
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string,
	}
  Variables : {
		userId: string
	}
}>();

// --------------------Middlewares-----------------------------------------
app.use('/api/v1/blog/*', async(c, next)=>{
  const jwt = c.req.header('Authorization');
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
})

// ---------------------Routes-------------------------------------
app.post('/api/v1/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	try {
		const user = await prisma.user.create({
			data: {
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

app.post('/api/v1/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})

app.post('/api/v1/blog', (c)=> {
  console.log(c.get('userId'));
  return c.text('Signin route')
})
app.put('/api/v1/blog', (c)=> {
  return c.text('Signin route')
})
app.get('/api/v1/blog/:id',(c)=>{
  const id  = c.req.param('id');
  console.log(id);
  return c.text('get blog route')
})

export default app
