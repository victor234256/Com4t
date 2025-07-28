const SelectInput = ({
	label,
	name,
	defaultValue,
	size,
	list,
	value,
}) => {
	return (
		<fieldset className="fieldset">
			<legend className="label capitalize">{label}</legend>
			<select
				name={name}
				defaultValue={defaultValue}
				className={`select ${size}`}
			>
				{list.map((item) => {
					return (
						<option value={value} key={item}>
							{item}
						</option>
					);
				})}
			</select>
		</fieldset>
	);
};
export default SelectInput;
