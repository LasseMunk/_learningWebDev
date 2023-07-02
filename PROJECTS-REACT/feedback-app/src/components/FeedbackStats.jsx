import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {

	const { feedbackData} = useContext(FeedbackContext);
	
	// calculate ratings avg
	// reduce creates the sum, then devide by the array length
	let average =
		feedbackData.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / feedbackData.length;

		// make sure only 1 decimal
		// if .0 then remove .0
		average = average.toFixed(1).replace(/[.,]0$/,''); 
	return (
		<div className='feedback-stats'>
			<h4> {feedbackData.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
};

export default FeedbackStats;
