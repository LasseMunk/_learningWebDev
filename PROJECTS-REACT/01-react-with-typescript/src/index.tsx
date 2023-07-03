// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
import Parent from "./props/parent";
import GuestList from "./stateExample/GuestList";
import UserSearch from "./stateExample/UserSearch";
import EventComponent from "./EventsExample/EventExample";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
// Important - Due to a bug in the DefinitelyTyped ReactDOM definitions, you need to add the ! operator here
const root = ReactDOM.createRoot(el!);

// 4) Create a component
const App = () => {
	return (
		<div>
            <EventComponent />
		</div>
	);
};

// 5) Show the component on the screen
root.render(<App />);
