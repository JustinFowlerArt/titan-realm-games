import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../data/types';
import { Carousel } from './common/carousel';
import { Hero } from './common/hero';
import { LinkButton } from './common/linkButton';
import { FeatureDetail } from './featureDetail';
import { H2 } from './layout/h2';
import { Main } from './layout/main';
import { Section1Col } from './layout/section1Col';
import { Section2ColFull } from './layout/section2ColFull';

interface Props {
	games: Game[];
}

export const GameDetail = ({ games }: Props) => {
	const { slug } = useParams();

	const [game, setGame] = useState<Game>();

	useEffect(() => {
		if (slug) {
			if (game?.title === slug) return;
			setGame(
				games.find(game => {
					return game.title.toLowerCase().includes(slug.toLowerCase());
				})
			);
		}
	}, [games, slug, game]);

	return (
		<Main>
			{game && (
				<>
					<Hero
						title={game.title}
						cover={game.coverImage}
						links={
							<>
								<LinkButton link={{ title: 'Buy Now', url: '#' }} />
								<LinkButton
									link={{ title: 'Watch Trailer', url: '#' }}
									glyph='&#10141;'
								/>
							</>
						}
					/>
					<Section1Col>
						<div className='space-y-6 text-center w-2/3'>
							<H2>{game.tagline}</H2>
							{game.description.map((paragraph, i) => (
								<p key={i}>{paragraph}</p>
							))}
						</div>
					</Section1Col>
					{game.features.map((feature, i) =>
						(i + 1) % 2 === 1 ? (
							<Section2ColFull
								key={i}
								left={<img src={feature.image} />}
								right={<FeatureDetail feature={feature} />}
							/>
						) : (
							<Section2ColFull
								key={i}
								left={<FeatureDetail feature={feature} />}
								right={<img src={feature.image} />}
								flip={true}
							/>
						)
					)}
					<Section1Col>
						<H2>Media</H2>
						<Carousel slides={game.media} />
					</Section1Col>
				</>
			)}
		</Main>
	);
};
