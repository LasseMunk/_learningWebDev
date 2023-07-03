import './FizzBuzzStyle.css';

function FizzBuzz() {
    
    function fizzBuzz(index) {
        if ( index % 15 === 0) return index + " - fizzBuzz"
        else if(index % 3 === 0) return index + " - fizz"
        else if (index % 5 === 0 ) return index + " - buzz"
        else return index
      }

  return (
    <div className="fizzBuzz">
    <h1> FizzBuzz example</h1>
    <ul>
      { Array.from({length: 100 }, (_, i) => (
        <li key={i + 1}>{fizzBuzz(i + 1)} </li>
      ))}
        </ul>

   </div>
  )
}
export default FizzBuzz