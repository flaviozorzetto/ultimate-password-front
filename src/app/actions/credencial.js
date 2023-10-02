'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

const url = process.env.NEXT_PUBLIC_BASE_URL + '/credencial';

export async function create(formData) {
	Object.assign(formData, { conta: { id: 1 } });
	const options = {
		method: 'POST',
		body: JSON.stringify(formData),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const resp = await fetch(url, options);

	if (resp.status !== 201) {
		const json = await resp.json();
		console.log(json);
		return { error: 'Erro ao cadastrar' + json.message };
	}

	revalidatePath('/credencial');
	return { ok: 'Credencial cadastrada com sucesso' };
}

export async function getCredencials() {
	const token = cookies().get('ultimatepassword_token');

	const res = await fetch(url + '?page=0&size=200', {
		next: { revalidate: 0 },
		method: 'GET',
		// headers: {
		// 	Authorization: `Bearer ${token.value}`,
		// },
	});
	console.log(url);
	console.log(res.status);

	return await res.json();
}

export async function getCredencial(id) {
	return await fetch(
		`http://localhost:8080/ultimatepassword/credencial/${id}`,
		{
			next: { revalidate: 0 },
			method: 'GET',
		}
	).then(res => res.json());
}

export async function destroy(id) {
	const response = await fetch(
		`http://localhost:8080/ultimatepassword/credencial/${id}`,
		{
			method: 'DELETE',
		}
	).then(res => res.text());

	if (!response.ok) {
		return {
			error: 'Falha ao apagar credencial',
		};
	}

	revalidatePath('/credencial');
}
