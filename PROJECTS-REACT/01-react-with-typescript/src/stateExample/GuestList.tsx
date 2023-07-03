import { useState } from "react";

const GuestList: React.FC = () => {
	const [name, setName] = useState("");
    const [guests, setGuests] = useState<string[]>([])

    function onClickHandler(): void {
        setName('');
        setGuests([...guests, name]);
    }

	return (
		<div>
			<h3>Guest List</h3>
            <ul>
                {guests.map((guest) => 
                <li key={guest}>
                    {guest}
                </li>)}
            </ul>
			<input value={name} onChange={(event) => setName(event.target.value)}/>
			<br/>
			<button onClick={onClickHandler}>Add Guest</button>
		</div>
	);
};

export default GuestList;
