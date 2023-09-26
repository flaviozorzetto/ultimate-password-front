'use server';

import { cookies } from 'next/headers';

export async function apiLogin(credenciais) {
	const options = {
		method: 'POST',
		body: JSON.stringify(credenciais),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const resp = await fetch(
		'http://localhost:8080/ultimatepassword/login',
		options
	);

	if (resp.status !== 200) return { error: 'usuário ou senha inválidas' };

	console.log('xuizeee');
	const json = await resp.json();

	cookies().set('ultimatepassword_token', json.token, {
		maxAge: 60 * 60 * 24 * 2, //2 dias
	});
}

export async function apiLogout() {
	cookies().delete('ultimatepassword_token');
}
