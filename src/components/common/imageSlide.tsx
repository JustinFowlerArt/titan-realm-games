import { Link } from 'react-router-dom';
import { Slide } from '../../data/types';

interface Props {
	slide: Slide;
}

export const ImageSlide = ({ slide }: Props) => {
	const styles = {
		backgroundImage: `url(${slide.image})`,
	};

	return (
		<Link
			to={slide.url}
			className='w-full aspect-[4/3] transition-all bg-cover bg-center hover:bg-blend-multiply hover:bg-gray-400'
			style={styles}
		></Link>
	);
};
