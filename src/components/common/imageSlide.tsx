interface Props {
	location: string;
	link: string;
}

export const ImageSlide = ({ location, link }: Props) => {
	const styles = {
		backgroundImage: `url(${location})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};

	return (
		<a
			className='h-72 w-96 transition-all hover:bg-blend-multiply hover:bg-gray-400'
			style={styles}
			href={link}
		></a>
	);
};
