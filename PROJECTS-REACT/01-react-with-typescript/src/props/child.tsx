interface ChildProps {
	color: string;
	onClickHandler: () => void;
	children?: React.ReactNode;
}

export const Child = ({ color, onClickHandler, children }: ChildProps) => {
	return (
		<div>
			{color}
			<button onClick={onClickHandler}>Click Me</button>
		</div>
	);
};

// ChildAsFC name could be anything.
// React.FC<ChildProps> Let TS know it is a react component
// TS will understand that Child might have properties assigned such as
// propTypes, and contextTypes etc.
// Child will receive props of type <ChildProps>
// Expects to receive children prop
export const ChildAsFC: React.FC<ChildProps> = ({
	color,
	onClickHandler,
	children,
}) => {
	return (
		<div>
			<p>{color}</p>
			<button onClick={onClickHandler}>Click Me</button>
			{children}
		</div>
	);
};
