'use client';

import { create } from '@/app/actions/credencial';
import TextInput from '@/components/TextInput';
import { useForm } from 'react-hook-form';

export default function FormCredencial() {
	const { register, handleSubmit } = useForm();
	async function submitHandler(formData) {
		const res = await create(formData);
	}

	return (
		<div className="flex justify-center items-center h-full">
			<div className="bg-amber-300 p-6 max-w-[1160px] h-[500px] w-full rounded-lg flex flex-col items-center gap-2">
				<h2 className="font-medium text-3xl">Cadastrar nova credencial</h2>
				<form onSubmit={handleSubmit(submitHandler)}>
					<TextInput
						name="nome_credencial"
						id="nome_credencial"
						label="Nome da credencial"
						required={true}
						register={register}
					/>
					<TextInput
						name="nome_usuario"
						id="nome_usuario"
						label="Nome de usuario"
						required={true}
						register={register}
					/>
					<TextInput
						name="senha"
						id="senha"
						label="Senha"
						register={register}
						required={true}
					/>
					<TextInput
						name="url"
						id="url"
						label="Url do site"
						register={register}
						required={true}
					/>
					<TextInput
						name="notas"
						id="notas"
						label="Notas"
						register={register}
					/>
					<button type="submit">Salvar</button>
				</form>
			</div>
		</div>
	);
}
