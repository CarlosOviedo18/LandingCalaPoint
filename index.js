import express from 'express';
import { testDatabaseConnection } from './connection.js';
import emailsRouter from './src/routes/emails.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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


