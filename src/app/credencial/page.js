import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import DataRow from './DataRow';
import Link from 'next/link';

async function getCredencials() {
	return await fetch(
		'http://localhost:8080/ultimatepassword/credencial?page=0&size=200',
		{
			next: { revalidate: 0 },
			method: 'GET',
		}
	).then(res => res.json());
}

export default async function Page() {
	const credencials = await getCredencials();

	const data = credencials['_embedded']['entityModelList'];

	return (
		<div className="flex justify-center items-center h-full">
			<div className="bg-amber-300 p-6 max-w-[1160px] h-[500px] w-full rounded-lg flex flex-col justify-between">
				<div className="flex justify-between">
					<h2 className="font-medium text-3xl">Minhas Credenciais</h2>
					<div className="flex gap-x-4 justify-center items-center">
						<button>
							<Link href={'credencial/new'}>
								<PlusIcon className="h-7 w-7 stroke-2" />
							</Link>
						</button>
						<MagnifyingGlassIcon className="h-7 w-7 stroke-2" />
					</div>
				</div>
				<div className="mt-4 flex flex-col gap-y-2 h-[380px] w-full overflow-auto">
					{data.map((credencial, i) => {
						return <DataRow key={i} credencial={credencial} />;
					})}
				</div>
			</div>
		</div>
	);
}
