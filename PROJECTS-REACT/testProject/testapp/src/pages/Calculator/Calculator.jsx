import "./CalculatorStyle.css";
import CalculatorNumpad from "./CalculatorNumpad";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorHeader from "./CalculatorHeader";
import { useState } from "react";

function Calculator() {
	const [displayContent, setDisplayContent] = useState("");
  const [result, setResult] = useState(0);

  
	return (
		<div className='container'>
			<CalculatorHeader />
			<CalculatorDisplay />
      <CalculatorNumpad />
    </div>
	);
}
export default Calculator;
