'use server';

import { cookies } from 'next/headers';

const url = process.env.NEXT_PUBLIC_BASE_URL + '/login';

export async function apiLogin(credenciais) {
	const options = {
		method: 'POST',
		body: JSON.stringify(credenciais),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	console.log(url);
	const resp = await fetch(url, options);

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
