import { Router } from 'express';
import { pool } from '../../connection.js';

const emailsRouter = Router();

function isValidEmail(email) {
	return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

emailsRouter.post('/emails', async (request, response) => {
	const email = request.body?.email;
	const source = request.body?.source ?? null;

	if (!isValidEmail(email)) {
		return response.status(400).json({ ok: false, message: 'Email invalido' });
	}

	try {
		const [result] = await pool.execute(
			'INSERT INTO emails (email, source) VALUES (?, ?)',
			[email.trim(), source],
		);

		return response.status(201).json({
			ok: true,
			message: 'Email guardado correctamente',
			id: result.insertId,
		});
	} catch (error) {
		if (error?.code === 'ER_DUP_ENTRY') {
			return response.status(409).json({ ok: false, message: 'Ese email ya existe' });
		}

		return response.status(500).json({
			ok: false,
			message: 'No se pudo guardar el email',
			error: error instanceof Error ? error.message : 'Error desconocido',
		});
	}
});

export default emailsRouter;