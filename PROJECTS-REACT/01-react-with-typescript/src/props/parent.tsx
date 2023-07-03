import { ChildAsFC } from "./child";


const Parent = () => 
{
    return <ChildAsFC color="red" onClickHandler={() => console.log('clicked')} > 
        <h1> children!</h1>
    </ChildAsFC>
};


export default Parent;

