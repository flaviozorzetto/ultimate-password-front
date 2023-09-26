'use client';

import { useForm } from 'react-hook-form';
import TextInput from '@/components/TextInput';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export default function Page() {
	const { register, handleSubmit } = useForm();
	const { login } = useContext(AuthContext);

	const onSubmit = data => {
		login(data);
	};

	return (
		<div className="flex justify-center items-center h-full">
			<div className="bg-amber-300 p-6 max-w-[1160px] h-[500px] w-full rounded-lg flex flex-col items-center gap-2">
				<h2 className="font-medium text-3xl">Logar</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextInput
						name="email"
						label="Email"
						required={true}
						register={register}
					/>
					<TextInput
						name="senha"
						label="Senha"
						type="password"
						required={true}
						register={register}
					/>
					<button type="submit" className="bg-amber-500 p-2 rounded-md mt-2">
						Entrar
					</button>
				</form>
			</div>
		</div>
	);
}
