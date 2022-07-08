import { useEffect, useState } from 'react';

import { Header } from './components/header';
import { Home } from './components/home';
import { Footer } from './components/footer';

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
			<Home />
			<Footer />
		</div>
	);
};
