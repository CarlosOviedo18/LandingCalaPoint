import express from 'express';
import { testDatabaseConnection } from './connection.js';
import emailsRouter from './src/routes/emails.js';

const app = express();
const port = process.env.PORT || 3000;

// CORS Configuration
const allowedOrigins = [
	'http://localhost:5173', // Vite dev
	'http://localhost:3000', // Local backend
	process.env.FRONTEND_URL || '', // Production frontend URL
].filter(Boolean);

app.use((req, res, next) => {
	const origin = req.headers.origin;
	if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
		res.header('Access-Control-Allow-Origin', origin || '*');
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
		res.header('Access-Control-Allow-Credentials', 'true');
	}
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}
	next();
});

app.use(express.json());

// Servir archivos estáticos del frontend (React/Vite)
app.use(express.static('dist'));

app.get('/', (_request, response) => {
	response.json({ message: 'Backend running on port 3000' });
});

app.get('/api/db-connection', async (_request, response) => {
	try {
		await testDatabaseConnection();
		response.json({ ok: true, message: 'Conexion a MySQL exitosa' });
	} catch (error) {
		response.status(503).json({
			ok: false,
			message: 'No se pudo conectar a MySQL',
			error: error instanceof Error ? error.message : 'Error desconocido',
		});
	}
});

app.use('/api', emailsRouter);

app.listen(port, () => {
	console.log(`Backend running on http://localhost:${port}`);
});


