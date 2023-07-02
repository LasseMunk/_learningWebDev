import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

// wrap everything in a <Provider>, therefore it takes the children
// of that tag as parameters
export const FeedbackProvider = ({ children }) => {
	const [feedbackData, setFeedbackData] = useState([
		{
			id: 1,
			text: "Feedback Context Item 1",
			rating: 10,
		},
		{
			id: 2,
			text: "Feedback Context Item 2",
			rating: 7,
		},
		{
			id: 3,
			text: "Feedback Context Item 3",
			rating: 5,
		},
	]);

	const [editFeedbackData, setEditFeedbackData] = useState({
		item: {}, // item we are editing will be filled in here
		edit: false, // edit mode: true
	});

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();

		// put newFeedback in front of all other items already in feedback
		// create a new array, and setFeedback to this new array
		setFeedbackData([newFeedback, ...feedbackData]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			// return array without the one we are deleting
			setFeedbackData(feedbackData.filter((item) => item.id !== id));
		}
	};

	// edit feedback  will take in an object
	// set that object to feedbackEdit, and set editmode to true
	const editFeedback = (item) => {
		setEditFeedbackData({
			item,
			edit: true,
		});
	};

	const updateFeedbackItem = (id, updatedItem) => {
		setFeedbackData(
			// if the id of the edited item matches the
			// id of the item in the feedbackData, then set updatedItem otherwise set item
			// retur nnew array which is set into feedbackData
			feedbackData.map((item) => (item.id === id ? {...item, ...updatedItem} : item))
		);

		setEditFeedbackData({
			item: {},
			edit: false
		})
	};

	return (
		// feedback is shorthand for writing feedback: feedback
		<FeedbackContext.Provider
			value={{
				feedbackData,
				editFeedbackData,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedbackItem,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
