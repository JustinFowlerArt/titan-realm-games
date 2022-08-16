interface Props {
	direction: string;
	handleClick: () => void;
	glyph: string;
}

export const Arrow = ({ direction, handleClick, glyph }: Props) => (
	<div
		className={`cursor-pointer border-2 border-titan-light-blue text-titan-light-blue px-2 py-1 lg:text-2xl hover:text-titan-dark-blue hover:border-titan-dark-blue ${
			direction === 'left' ? 'rotate-180' : ''
		}`}
		onClick={handleClick}
	>
		{glyph}
	</div>
);
