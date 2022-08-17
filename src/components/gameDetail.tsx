import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../data/types';
import { Hero } from './common/hero';
import { Main } from './common/main';

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
			{game && <Hero title={game.title} cover='/images/wompySplash.jpg' />}{' '}
		</Main>
	);
};
