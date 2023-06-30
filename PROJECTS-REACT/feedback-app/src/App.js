import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
	const [feedbackData, setFeedback] = useState(FeedbackData);

	/*
    <> called a fragment. This will not be shown in the DOM but wraps the JSX as a container
    */
	const deleteFeedback = (id) => {
		if(window.confirm('Are you sure you want to delete?'))
		{
			// return array without the one we are deleting
			setFeedback(feedbackData.filter((item) => item.id !== id))
		}
	}

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackStats feedbackData={feedbackData}/>
				<FeedbackList feedbackData={feedbackData} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
