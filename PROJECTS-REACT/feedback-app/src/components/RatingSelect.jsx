// select is a function which we can call on radio button change
// select = setRating
// selected = rating

function RatingSelect( {select, selected}) {
	const handleChange = (event) => {
        // event.currentTarget.value returns a string
        // change to number by adding + in front
        select(+event.currentTarget.value) // call function with selected value
    };

	return (
		// create 10 radio buttons
		<ul className='rating'>
			{Array.from({ length: 10 }, (_, i) => (
				<li key={`rating-${i + 1}`}>
					<input
						type='radio'
						id={`num${i + 1}`}
						name='rating'
						value={i + 1}
						onChange={handleChange}
						checked={selected === i + 1}
					/>

					{/* creating labels and writing numbers in the UI*/}
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>
	);
}
export default RatingSelect;
