const FormCheckbox = ({
	label,
	name,
	defaultValue,
	size,
}) => {
	return (
		<div className="fieldset flex flex-col items-center gap-3">
			<legend className="label capitalize">{label}</legend>
			<input
				type="checkbox"
				name={name}
				defaultChecked={defaultValue}
				className={`checkbox checkbox-primary ${size}`}
			/>
		</div>
	);
};
export default FormCheckbox;
