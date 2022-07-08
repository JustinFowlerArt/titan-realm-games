import { useState } from 'react';
import { ImageSlide } from './imageSlide';
import { Arrow } from './arrow';

const imgUrls = [
	{ location: './images/lastKeyOfRobotica3.jpg', link: '#' },
	{ location: './images/avarice.jpg', link: '#' },
	{ location: './images/wompatron9000.jpg', link: '#' },
	{ location: './images/writerUnblocked.jpg', link: '#' },
];

export const Carousel = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const previousSlide = () => {
		const lastIndex = imgUrls.length - 1;
		const shouldResetIndex = currentImageIndex === 0;
		const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

		setCurrentImageIndex(index);
	};

	const nextSlide = () => {
		const lastIndex = imgUrls.length - 1;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index = shouldResetIndex ? 0 : currentImageIndex + 1;

		setCurrentImageIndex(index);
	};

	return (
		<div className='flex items-center justify-between relative w-full'>
			<Arrow direction='left' handleClick={previousSlide} glyph='&#10141;' />
			<div className='flex space-x-12'>
				<ImageSlide
					location={imgUrls[currentImageIndex].location}
					link={imgUrls[currentImageIndex].link}
				/>
				<ImageSlide
					location={
						imgUrls[
							currentImageIndex + 1 > imgUrls.length - 1
								? 0
								: currentImageIndex + 1
						].location
					}
					link={
						imgUrls[
							currentImageIndex + 1 > imgUrls.length - 1
								? 0
								: currentImageIndex + 1
						].link
					}
				/>
				<ImageSlide
					location={
						imgUrls[
							currentImageIndex + 2 > imgUrls.length - 1
								? currentImageIndex - 2
								: currentImageIndex + 2
						].location
					}
					link={
						imgUrls[
							currentImageIndex + 2 > imgUrls.length - 1
								? currentImageIndex - 2
								: currentImageIndex + 2
						].link
					}
				/>
			</div>
			<Arrow direction='right' handleClick={nextSlide} glyph='&#10141;' />
		</div>
	);
};
