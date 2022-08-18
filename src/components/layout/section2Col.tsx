interface Props {
	left: React.ReactNode;
	right: React.ReactNode;
}

export const Section2Col = ({ left, right }: Props) => {
	return (
		<section className='flex flex-col items-center p-6 max-w-3xl lg:max-w-6xl lg:flex-row lg:justify-between xl:p-20'>
			<div className='my-2 lg:my-0 lg:w-1/2 lg:order-2'>{right}</div>
			<div className='my-2 lg:my-0 lg:w-1/2'>{left}</div>
		</section>
	);
};
