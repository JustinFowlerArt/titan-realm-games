import { Carousel } from './common/carousel';
import { gameSlides } from '../data/links';
import { Section1Col } from './layout/section1Col';
import { H2 } from './layout/h2';

export const Games = () => {
	return (
		<Section1Col>
			<H2>Games</H2>
			<Carousel slides={gameSlides} />
		</Section1Col>
	);
};
