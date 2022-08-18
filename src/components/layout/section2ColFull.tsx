interface Props {
	left: React.ReactNode;
	right: React.ReactNode;
	flip?: boolean;
}

export const Section2ColFull = ({ left, right, flip }: Props) => {
	return (
		<section className='flex flex-col items-center w-full h-fit lg:flex-row'>
			<div
				className={`w-full aspect-video lg:w-1/2 lg:order-2 ${
					flip ? 'order-2' : ''
				}`}
			>
				{right}
			</div>
			<div className='w-full aspect-video lg:w-1/2'>{left}</div>
		</section>
	);
};
