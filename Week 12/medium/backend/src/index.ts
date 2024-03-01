import { Hono } from 'hono'
import { decode,sign,verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { useRouter } from './routes/user'
import { blogRouter } from './routes/blog'

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

app.route('/api/v1/user', useRouter);
app.route('/api/v1/blog', blogRouter);

export default app
