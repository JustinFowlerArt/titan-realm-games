import { Game } from './types';

export const games: Game[] = [
	{
		id: 0,
		title: 'Wompy',
		coverImage: './images/wompySplash.jpg',
		description: [
			'Wompatron 9000 is a handsome Robot Colossus who tires of his day-to-day grind and decides to vacation at the famed BCT Vertical Theme Park. When an army of evil Llamas takes over the park and steals his Golden Kitty prize, Wompy must launch himself to the top to confront the Llama bullies and find their leader to save his Golden Kitty.',
			'As he ascends through the park attractions, Wompy punches the Llamas to extend his flight as he rescues Park Patronz and Tiny Kittenz, earning valuable Kitty Karma in the process. Between attempts, Wompy can spend earned Kitty Karma at the park gift Store to purchase powerful upgrades, bonus drops, and vanity items to help him reach new heights.',
		],
		features: [
			{
				title: 'Gift Shop',
				description: 'Purchase upgrades to help Wompy reach new height',
			},
		],
		media: ['./images/wompySplash.jpg'],
	},
];
