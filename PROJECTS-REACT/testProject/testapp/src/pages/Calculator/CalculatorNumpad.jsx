import CalculatorBtn from "./CalculatorBtn";

function CalculatorNumpad() {
	return (
		<div className='numPad-container'>
			<div className='numpad-row'>
				<CalculatorBtn value={1} />
				<CalculatorBtn value={2} />
				<CalculatorBtn value={3} />
			</div>
			<div className='numpad-row'>
				<CalculatorBtn value={4} />
				<CalculatorBtn value={5} />
				<CalculatorBtn value={6} />
			</div>
			<div className='numpad-row'>
				<CalculatorBtn value={7} />
				<CalculatorBtn value={8} />
				<CalculatorBtn value={9} />
			</div>
			<div className='numpad-row'>
				<CalculatorBtn value={"+"} />
				<CalculatorBtn value={"-"} />
				<CalculatorBtn value={"enter"} />
			</div>
		</div>
	);
}
export default CalculatorNumpad;
