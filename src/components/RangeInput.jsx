import { useState } from "react";
import { formatPrice } from "../utils";

const RangeInput = ({ name, label, size, price }) => {
	const step = 100;
	const maxPrice = 100000000000;
	const [selectPrice, setSelectedPrice] = useState(
		price || maxPrice,
	);
	return (
		<fieldset className="fieldset items-center">
			<legend className="label capitalize">{label}</legend>
			<span>{formatPrice(selectPrice)}</span>
			<input
				type="range"
				min={0}
				max={maxPrice}
				onChange={(e) => setSelectedPrice(e.target.value)}
				value={selectPrice}
				className={`range range-primary ${size}`}
				name={name}
				step={step}
			/>
			<div className="w-full flex justify-between text-xs px-2 mt-2">
				<span className="font-bold text-md">0</span>
				<span className="font-bold text-md">
					max : {formatPrice(maxPrice)}
				</span>
			</div>
		</fieldset>
	);
};
export default RangeInput;
