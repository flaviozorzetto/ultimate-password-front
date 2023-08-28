export default function DataRow({ credencial }) {
	return (
		<div className="bg-amber-200 p-5 rounded-lg">
			<p>Nome: {credencial.nome_credencial}</p>
			<p>Usuario: {credencial.nome_usuario}</p>
			<p>senha: {credencial.senha}</p>
			<p>url: {credencial.url}</p>
			<p>notas: {credencial.notas}</p>
		</div>
	);
}
