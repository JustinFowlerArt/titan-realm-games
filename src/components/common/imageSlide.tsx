import { Link } from 'react-router-dom';
import { Slide } from '../../data/types';

interface Props {
	slide: Slide;
	open?: boolean;
	mobile?: boolean;
}

export const ImageSlide = ({ slide, open = false, mobile = false }: Props) => {
	const styles = {
		backgroundImage: `url(${slide.image})`,
	};

	return (
		<>
			{slide.url ? (
				<Link
					to={slide.url}
					className='w-full aspect-video transition-all bg-center bg-cover hover:bg-blend-multiply hover:bg-gray-400'
					style={styles}
				></Link>
			) : (
				<div
					className={`transition-all bg-center cursor-pointer ${
						mobile ? 'h-screen aspect-[9/16] mx-auto' : 'w-full aspect-video'
					} ${
						open
							? 'bg-contain bg-no-repeat'
							: 'bg-cover hover:bg-blend-multiply hover:bg-gray-400'
					}`}
					style={styles}
				></div>
			)}
		</>
	);
};
