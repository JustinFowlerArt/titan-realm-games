interface Props {
	slide: {
		location: string;
		link: string;
	};
}

export const ImageSlide = ({ slide }: Props) => {
	const styles = {
		backgroundImage: `url(${slide.location})`,
	};

	return (
		<a
			className='w-full aspect-[4/3] transition-all bg-cover bg-center hover:bg-blend-multiply hover:bg-gray-400'
			style={styles}
			href={slide.link}
		></a>
	);
};
