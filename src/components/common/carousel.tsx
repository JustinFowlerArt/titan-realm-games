import { useState } from 'react';
import { ImageSlide } from './imageSlide';
import { Arrow } from './arrow';
import { Slide } from '../../data/types';

interface Props {
	slides: Slide[];
}

export const Carousel = ({ slides }: Props) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const previousSlide = () => {
		const lastIndex = slides.length - 1;
		const shouldResetIndex = currentImageIndex === 0;
		const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

		setCurrentImageIndex(index);
	};

	const nextSlide = () => {
		const lastIndex = slides.length - 1;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index = shouldResetIndex ? 0 : currentImageIndex + 1;

		setCurrentImageIndex(index);
	};

	return (
		<div className='flex items-center justify-between w-full'>
			<Arrow direction='left' handleClick={previousSlide} glyph='&#10141;' />
			<div className='flex w-full justify-between p-3 lg:p-6 lg:space-x-6'>
				<div className='flex h-full w-full'>
					<ImageSlide slide={slides[currentImageIndex]} />
				</div>
				<div className='hidden h-full w-full lg:flex'>
					<ImageSlide
						slide={
							slides[
								currentImageIndex + 1 > slides.length - 1
									? 0
									: currentImageIndex + 1
							]
						}
					/>
				</div>
				<div className='hidden h-full w-full xl:flex'>
					<ImageSlide
						slide={
							slides[
								currentImageIndex + 2 > slides.length - 1
									? currentImageIndex - 2
									: currentImageIndex + 2
							]
						}
					/>
				</div>
			</div>
			<Arrow direction='right' handleClick={nextSlide} glyph='&#10141;' />
		</div>
	);
};
