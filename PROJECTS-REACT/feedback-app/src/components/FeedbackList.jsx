import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbackData, handleDelete }) {
	
    if (!feedbackData || feedbackData.length === 0) {
		return <p>No Feedback Yet</p>;
	}

	return ( 
    <div className="feedback-list">
        { feedbackData.map( (item) => (

            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />

        ))}
    </div>
    )
}
export default FeedbackList;
