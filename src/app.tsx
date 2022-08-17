import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/common/header';
import { Home } from './components/home';
import { Footer } from './components/common/footer';
import { games } from './data/gamesInfo';
import { GameDetail } from './components/gameDetail';

export const App = () => {
	const [lastScroll, setLastScroll] = useState(0);
	const [scrollDirection, setScrollDirection] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			if (currentScroll <= 0) {
				setScrollDirection('');
			} else if (currentScroll > lastScroll) {
				setScrollDirection('down');
			} else if (currentScroll < lastScroll) {
				setScrollDirection('up');
			}
			setLastScroll(currentScroll);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScroll]);

	return (
		<div className='bg-gray-900 text-white'>
			<Header scrollDirection={scrollDirection} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='games/:slug' element={<GameDetail games={games} />} />
			</Routes>
			<Footer />
		</div>
	);
};
