import { useState } from 'react';
import { ImageSlide } from './imageSlide';
import { Icon } from './icon';
import { Slide } from '../../data/types';

interface Props {
	slides: Slide[];
	cols?: number;
	lightbox?: boolean;
	mobile?: boolean;
}

export const Carousel = ({
	slides,
	cols = 1,
	lightbox = false,
	mobile = false,
}: Props) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [open, setOpen] = useState(false);

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

	const returnSlide = (index: number) => {
		switch (index) {
			case 1:
				if (currentImageIndex + 1 > slides.length - 1) {
					break;
				}
				return currentImageIndex + 1;
			case 2:
				if (currentImageIndex + 2 > slides.length - 1) {
					if (currentImageIndex - 2 < 0) {
						break;
					}
					if (slides.length < 4) {
						return currentImageIndex - 1;
					}
					return currentImageIndex - 2;
				} else {
					return currentImageIndex + 2;
				}
			default:
				break;
		}
		return 0;
	};

	return (
		<div
			className={`flex items-center justify-between w-full ${
				open && lightbox
					? 'fixed top-0 left-0 h-screen !w-screen bg-gray-900 z-40 px-3 py-6 lg:px-6 lg:py-10 xl:p-20'
					: ''
			} ${cols === 1 ? 'lg:w-3/4' : ''} `}
		>
			{open && lightbox && (
				<div className='absolute top-6 right-3 lg:right-6 xl:right-20'>
					<Icon glyph='&times;' handleClick={() => setOpen(!open)} />
				</div>
			)}
			<Icon glyph='&#10141;' handleClick={previousSlide} direction='left' />
			<div className='flex w-full justify-between p-3 lg:p-6 lg:space-x-6'>
				<div className='flex h-full w-full' onClick={() => setOpen(!open)}>
					<ImageSlide
						slide={slides[currentImageIndex]}
						open={open}
						mobile={mobile}
					/>
				</div>
				{cols > 1 && (
					<div
						className='hidden h-full w-full lg:flex'
						onClick={() => setOpen(!open)}
					>
						<ImageSlide
							slide={slides[returnSlide(1)]}
							open={open}
							mobile={mobile}
						/>
					</div>
				)}

				{cols > 2 && (
					<div
						className='hidden h-full w-full xl:flex'
						onClick={() => setOpen(!open)}
					>
						<ImageSlide
							slide={slides[returnSlide(2)]}
							open={open}
							mobile={mobile}
						/>
					</div>
				)}
			</div>
			<Icon glyph='&#10141;' handleClick={nextSlide} direction='right' />
		</div>
	);
};
