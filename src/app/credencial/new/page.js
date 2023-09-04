'use client';

import { create } from '@/app/actions/credencial';
import TextInput from '@/components/TextInput';
import { redirect } from 'next/navigation';

export default function formCredencial() {
	async function submitHandler(formData) {
		const res = await create(formData);
		console.log(res);
		redirect('/credencial');
	}

	return (
		<div className="flex justify-center items-center h-full">
			<div className="bg-amber-300 p-6 max-w-[1160px] h-[500px] w-full rounded-lg flex flex-col items-center gap-2">
				<h2 className="font-medium text-3xl">Cadastrar nova credencial</h2>
				<form action={submitHandler}>
					<TextInput
						name="nome_credencial"
						id="nome_credencial"
						label="Nome da credencial"
						required={true}
					/>
					<TextInput
						name="nome_usuario"
						id="nome_usuario"
						label="Nome de usuario"
						required={true}
					/>
					<TextInput name="senha" id="senha" label="Senha" required={true} />
					<TextInput name="url" id="url" label="Url do site" required={true} />
					<TextInput name="notas" id="notas" label="Notas" />
					<button type="submit">Salvar</button>
				</form>
			</div>
		</div>
	);
}
