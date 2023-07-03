import { ChangeEvent } from "react";

const EventComponent: React.FC = () => {
	function onChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
		console.log(event.target.value);
	}

	function onDragStartHandler(event: React.DragEvent<HTMLDivElement>): void {
        
    }

	return (
		<div>
			<h1> Event Component</h1>
			<input onChange={onChangeHandler}></input>
			<div draggable onDragStart={onDragStartHandler}>
				Drag Me!
			</div>
		</div>
	);
};

export default EventComponent;
