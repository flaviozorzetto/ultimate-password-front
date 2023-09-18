'use client';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { destroy } from '../actions/credencial';

export default function DataRow({ credencial }) {
	const [removeConfirmation, setRemoveConfirmation] = useState(false);
	return (
		<>
			<div className="bg-amber-200 p-5 rounded-lg flex justify-between">
				<div>
					<p>Nome: {credencial.nome_credencial}</p>
					<p>Usuario: {credencial.nome_usuario}</p>
					<p>senha: {credencial.senha}</p>
					<p>url: {credencial.url}</p>
					<p>notas: {credencial.notas}</p>
				</div>
				<div>
					<TrashIcon
						className="h-7 w-7 stroke-2 cursor-pointer"
						onClick={() => {
							setRemoveConfirmation(true);
						}}
					/>
				</div>
			</div>
			{removeConfirmation && (
				<>
					<div
						className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-60"
						onClick={() => {
							setRemoveConfirmation(false);
						}}
					></div>
					<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-yellow-400 p-2 rounded-md">
						<p>Deseja mesmo apagar esta credencial?</p>
						<div className="flex items-center justify-center gap-6 mt-6">
							<button
								className="bg-white p-2 rounded-md"
								onClick={() => {
									setRemoveConfirmation(false);
								}}
							>
								Não
							</button>
							<button
								className="bg-white p-2 rounded-md"
								onClick={async () => {
									const res = await destroy(credencial.id);
									window.location.reload();
								}}
							>
								Sim
							</button>
						</div>
					</div>
				</>
			)}
		</>
	);
}
