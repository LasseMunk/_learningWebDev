function CalculatorBtn( { value }) {

  
  const handleClick = () => {
    console.log(value)
  }

  return (
    <button type="submit" onClick={handleClick} className="numPad">
      {value}
    </button>
  )
}

CalculatorBtn.defaultProps = {
    value: 0
}
export default CalculatorBtn