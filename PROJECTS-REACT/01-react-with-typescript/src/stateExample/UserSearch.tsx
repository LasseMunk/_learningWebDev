import {useState} from 'react'

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 30},
    {name: 'Michael', age: 40},
]

interface User {
    name: string;
    age: number;
}

const UserSearch: React.FC = () => 
{
    const [name, setName] = useState('')
    const [user, setUser] = useState< User | undefined>()

    function onClickHandler(): void {
        const foundUser = users.find((user) => {
            return user.name === name;
        })

        setUser(foundUser);
    }

    return <div>
        <h1>User Search</h1>
        <input value={name} onChange={event => setName(event.target.value)}></input>
        <button onClick={onClickHandler}>Find User</button>
        <div>
            Name: {user && user.name} <br/>
            Age: {user && user.age}
        </div>
    </div>
}

export default UserSearch;