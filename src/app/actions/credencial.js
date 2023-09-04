'use server';

import { revalidatePath } from 'next/cache';

export async function create(formData) {
	const url = 'http://localhost:8080/ultimatepassword/credencial';
	const formDataFromEntries = Object.fromEntries(formData);
	Object.assign(formDataFromEntries, { conta: { id: 1 } });
	const options = {
		method: 'POST',
		body: JSON.stringify(formDataFromEntries),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const resp = await fetch(url, options);
	if (resp.status !== 201) {
		const json = await resp.json();
		return { error: 'Erro ao cadastrar' + json.message };
	}

	revalidatePath('/credencial');
	return { ok: 'Credencial cadastrada com sucesso' };
}
