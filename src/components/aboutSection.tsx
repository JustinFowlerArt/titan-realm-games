import { LinkButton } from './common/linkButton';
import { H2 } from './common/h2';
import { Section2Col } from './layout/section2Col';

export const AboutSection = () => {
	return (
		<Section2Col
			left={
				<>
					<H2>About</H2>
					<p className='mb-6 lg:pr-6'>
						Titan Realm Games is a game studio founded by three college students
						in search of something epic.
					</p>
					<LinkButton
						link={{ title: 'Learn More', url: '/about' }}
						glyph='&#10141;'
					/>
				</>
			}
			right={<img src='/images/wompySplash.jpg' />}
		/>
	);
};
