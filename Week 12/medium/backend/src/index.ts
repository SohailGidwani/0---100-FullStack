import { Hono } from 'hono'
import { useRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors';

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

app.use('/*',cors());
app.route('/api/v1/user', useRouter);
app.route('/api/v1/blog', blogRouter);

export default app
