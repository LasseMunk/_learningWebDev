function CalculatorDisplay({ displayContent }) {
	return <div className='numPad-display'>{displayContent}</div>;
}

CalculatorDisplay.defaultProps = {
	displayContent: "9999.9999",
};
export default CalculatorDisplay;
