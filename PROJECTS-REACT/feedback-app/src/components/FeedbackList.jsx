import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
	// get the feedback from the values from FeedbackContext.Provider
	const { feedbackData } = useContext(FeedbackContext);

	if (!feedbackData || feedbackData.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className='feedback-list'>
			{feedbackData.map((item) => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>
	);
}
export default FeedbackList;
