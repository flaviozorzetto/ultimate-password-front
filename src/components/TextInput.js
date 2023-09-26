export default function TextInput({ label, id, name, register=()=>{}, ...props }) {
	return (
		<div className="flex flex-col gap-1 my-2">
			<label className="font-semibold" htmlFor={id}>
				{label}
			</label>
			<input
				type="text"
				{...register(name)}
				{...props}
				id={id}
				className="bg-amber-500 rounded p-2 outline-none focus:ring-black focus:ring-1"
			/>
		</div>
	);
}
