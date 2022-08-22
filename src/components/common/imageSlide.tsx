import { Link } from 'react-router-dom';
import { Slide } from '../../data/types';

interface Props {
    slide: Slide;
    open?: boolean;
    mobile?: boolean;
}

export const ImageSlide = ({ slide, open = false, mobile = false }: Props) => {
    return (
        <>
            {slide.url ? (
                <Link
                    to={slide.url}
                    className='w-full aspect-video transition-all bg-center bg-cover hover:bg-blend-multiply hover:bg-gray-400'
                    style={{ backgroundImage: `url(${slide.image})` }}
                ></Link>
            ) : (
                <div
                    className={`transition-all bg-center cursor-pointer ${
                        mobile
                            ? 'w-full aspect-[9/16] xs:h-screen xs:w-auto xs:mx-auto'
                            : 'w-full aspect-video'
                    } ${
                        open
                            ? 'bg-contain bg-no-repeat'
                            : 'bg-cover hover:bg-blend-multiply hover:bg-gray-400'
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
            )}
        </>
    );
};
