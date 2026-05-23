import { useState } from 'react'

function isValidEmail(email) {
	return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function useLeadEmail(source = 'landing') {
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState('idle')
	const [message, setMessage] = useState('')

	const submitEmail = async (event) => {
		event.preventDefault()

		if (!isValidEmail(email)) {
			setStatus('error')
			setMessage('Escribe un correo valido.')
			return
		}

		setStatus('loading')
		setMessage('')

		try {
			const apiUrl = import.meta.env.VITE_API_URL || '/api'
			const response = await fetch(`${apiUrl}/emails`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email.trim(),
					source,
				}),
			})

			const data = await response.json()

			if (!response.ok) {
				throw new Error(data?.message || 'No se pudo guardar el correo')
			}

			setStatus('success')
			setMessage('Gracias, te avisaremos apenas esté listo.')
			setEmail('')
		} catch (error) {
			setStatus('error')
			setMessage(error instanceof Error ? error.message : 'Error desconocido')
		}
	}

	return {
		email,
		setEmail,
		submitEmail,
		status,
		message,
		isLoading: status === 'loading',
		isSuccess: status === 'success',
		isError: status === 'error',
	}
}