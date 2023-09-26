'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export default function Header() {
	const { user, logout } = useContext(AuthContext);
	return (
		<header className="bg-amber-500 h-[145px] px-[220px] flex justify-between items-center text-amber-950">
			<div className="font-bold text-4xl">
				<h1>Ultimate Password</h1>
			</div>
			<nav>
				<ul className="flex gap-x-14 font-medium text-xl">
					<li>
						<Link href="/credencial">Credenciais</Link>
					</li>
					<li>
						<Link href="/cadastro">Cadastro</Link>
					</li>
					<li>
						{user ? (
							<button
								className="bg-amber-600 text-amber-50 px-6 py-4 rounded-lg"
								onClick={logout}
							>
								Deslogar
							</button>
						) : (
							<Link
								href="login"
								className="bg-amber-600 text-amber-50 px-6 py-4 rounded-lg"
							>
								Entrar
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
}
