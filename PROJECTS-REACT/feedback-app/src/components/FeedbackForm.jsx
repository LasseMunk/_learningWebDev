import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
	const [text, setText] = useState(""); // destructure from useState, with default value
	const [rating, setRating] = useState(10); // destructure from useState, with default value
	const [btnDisabled, setbtnDisabled] = useState(true); // btn disabled until 10 characters has been entered
	const [message, setMessage] = useState("");

	const { addFeedback, editFeedbackData, updateFeedbackItem } =
		useContext(FeedbackContext);

	// [] is an array of dependencies. This function will run if the dependency changes
	// if the array is empty, the function will run when the component loads
	// if it is empty, it would be a good place to make an HTTP request when the component loads
	useEffect(() => {
		if (editFeedbackData.edit === true) {
			// if we are in edit mode
			setbtnDisabled(false); // enables send button
			setText(editFeedbackData.item.text);
			setRating(editFeedbackData.item.rating);
		}
	}, [editFeedbackData]);

	const handleTextChange = (event) => {
		if (text === "") {
			// if no input, disable button and remove text
			setbtnDisabled(true);
			setMessage("");
		} else if (text !== "" && text.trim().length <= 10) {
			// text.trim removes whitespace from input string
			// if input has less than 10 characters, disable button
			// and output message
			setbtnDisabled(true);
			setMessage("Text must be at least 10 characters");
		} else {
			// if input has more than 10 characters
			// enable button and remove message
			setbtnDisabled(false);
			setMessage("");
		}

		setText(event.target.value); // what is typed in the input form
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // prevent submitting to the file

		// re-check if length is larger than 10 because one could enable the button using
		// e.g. chrometools etc.
		if (text.trim().length > 10) {
			// text and rating is a shorthand for text: text, rating: rating
			const newFeedback = {
				text,
				rating,
			};

			if (editFeedbackData.edit === true) {
				updateFeedbackItem(editFeedbackData.item.id, newFeedback)
			} else {
				addFeedback(newFeedback);
			}
		}

		setText(""); // clear the text field after submitting
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={setRating} selected={rating} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						type='text'
						placeholder='Write A Review'
						value={text}
					/>

					<Button
						version='primary'
						type='submit'
						isDisabled={btnDisabled}
					>
						Send
					</Button>
				</div>

				{/* if message is true then return div */}
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}
export default FeedbackForm;
