import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../data/types';
import { Carousel } from '../components/common/carousel';
import { Hero } from '../components/common/hero';
import { FeatureDetail } from '../components/featureDetail';
import { H2 } from '../components/common/h2';
import { Main } from '../components/layout/main';
import { Section1Col } from '../components/layout/section1Col';
import { Section2ColFull } from '../components/layout/section2ColFull';
import { PageNotFound } from './pageNotFound';

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
					return game.title
						.toLowerCase()
						.replace(/ /g, '')
						.includes(slug.toLowerCase());
				})
			);
		}
	}, [games, slug, game]);

	return (
		<>
			{game ? (
				<Main>
					<Hero
						title={game.title}
						cover={game.coverImage}
						links={[
							{
								title: `${game.buyLinks[0].title}`,
								url: `${game.buyLinks[0].url}`,
							},
							{ title: 'Watch Trailer', url: `${game.trailer}` },
						]}
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
				</Main>
			) : (
				<PageNotFound />
			)}
		</>
	);
};
