import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="h-[255px] py-[42px] px-[220px] bg-amber-500 text-amber-950">
			<div className="flex justify-between">
				<div className="flex justify-between flex-col">
					<h2 className="text-4xl font-bold">Ultimate Password</h2>
					<span className="font-normal">
						Ultimate Password © Todos os direitos reservados.
					</span>
				</div>
				<div className="relative font-bold">
					<div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-600"></div>
					<h2 className="text-3xl">Informações</h2>
					<nav className="mt-6">
						<ul className="flex flex-col gap-y-5 text-xl">
							<li>
								<Link href="credencial">Credenciais</Link>
							</li>
							<li>
								<Link href="cadastro">Cadastro</Link>
							</li>
							<li>
								<Link href="login">Entrar</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
}
