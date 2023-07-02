// Props:
// children - wrap button around the text of the button, therefore  
// version - primary, secondary (which CSS class should be used)
// type - submit, regular button
// isDisabled

function Button( {children, version, type, isDisabled} ) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`} >
        {children} 
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

export default Button