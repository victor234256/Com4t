const FormInput = ({
	label,
	name,
	type,
	defaultValue,
	size,
}) => {
	return (
		<fieldset className="fieldset">
			<legend className="label capitalize">{label}</legend>
			<input
				name={name}
				type={type}
				className={`input ${size}`}
				defaultValue={defaultValue}
			/>
		</fieldset>
	);
};
export default FormInput;
