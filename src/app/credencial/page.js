import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import DataRow from './DataRow';
import Link from 'next/link';
import { getCredencials } from '../actions/credencial';

export default async function Page() {
	const credencials = await getCredencials();

	let data = [];
	if (credencials['_embedded']) {
		data = credencials['_embedded']['entityModelList'];
	}

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
