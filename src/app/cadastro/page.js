'use client';

import TextInput from '@/components/TextInput';
import { redirect } from 'next/navigation';

export default function Page() {
	async function submitHandler(formData) {
		redirect('/login');
	}

	return (
		<div className="flex justify-center items-center h-full">
			<div className="bg-amber-300 p-6 max-w-[1160px] h-[500px] w-full rounded-lg flex flex-col items-center gap-2">
				<h2 className="font-medium text-3xl">Cadastrar nova credencial</h2>
				<form action={submitHandler}>
					<TextInput
						name="nome"
						id="nome"
						label="Nome de usuario"
						required={true}
					/>
					<TextInput name="email" id="email" label="Email" required={true} />
					<TextInput name="senha" id="senha" label="Senha" required={true} />
					<button type="submit" className="bg-amber-500 p-2 rounded-md mt-2">
						Salvar
					</button>
				</form>
			</div>
		</div>
	);
}
