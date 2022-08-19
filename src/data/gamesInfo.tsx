import { Game } from './types';

export const games: Game[] = [
	{
		title: 'Wompatron 9000',
		tagline: 'Reach New Heights',
		coverImage: './images/wompySplash.jpg',
		trailer: 'https://youtu.be/0A5owp32ULQ',
		mobile: true,
		description: [
			'Wompatron 9000 is a handsome Robot Colossus who tires of his day-to-day grind and decides to vacation at the famed BCT Vertical Theme Park. When an army of evil Llamas takes over the park and steals his Golden Kitty prize, Wompy must launch himself to the top to confront the Llama bullies and find their leader to save his Golden Kitty.',
			'As he ascends through the park attractions, Wompy punches the Llamas to extend his flight as he rescues Park Patronz and Tiny Kittenz, earning valuable Kitty Karma in the process. Between attempts, Wompy can spend earned Kitty Karma at the park gift Store to purchase powerful upgrades, bonus drops, and vanity items to help him reach new heights.',
		],
		features: [
			{
				title: 'Avoid Obstacles',
				description: 'Watch out for obstacles that will hurt Wompy',
				image: './images/games/wompyGameplay1.jpg',
				backgroundImage: './images/games/wompyGameplay1.jpg',
			},
			{
				title: 'LLama Punching',
				description: 'Punch llamas to steal their fuel',
				image: './images/games/wompyGameplay2.jpg',
				backgroundImage: './images/games/wompyGameplay2.jpg',
			},
			{
				title: 'Gift Shop',
				description: 'Purchase upgrades to help Wompy reach new height',
				image: './images/games/wompyGiftShop.jpg',
				backgroundImage: './images/games/wompyGiftShop.jpg',
			},
		],
		buyLinks: [{ title: 'Buy Now', url: '#' }],
		media: [
			{ image: './images/games/wompyGameplay1.jpg', url: '#' },
			{ image: './images/games/wompyGameplay2.jpg', url: '#' },
			{ image: './images/games/wompyGiftShop.jpg', url: '#' },
			{ image: './images/games/wompyMainMenu.jpg', url: '#' },
		],
	},
	{
		title: 'Last Key Of Robotica 3',
		tagline: 'Sacrifices Must Be Made!',
		coverImage: './images/lastKeyOfRobotica3.jpg',
		trailer: '#',
		mobile: false,
		description: [
			'Meet Paladin, the last surviving human brain on Terra. Your mission has been compromised and the forces of the Veil are converging on your position. In a last ditch effort to escape with the vital information you have secured, you are attempting to uploading your consciousness off world. However, the transcoding process is lengthy with your calculations alone.',
			'Fortunately, you have discovered a flaw in the coding of a small number of enemy bots, allowing you to wrest control and focus their computation power on your transcoder. Be careful though, for your enemies are overwhelming and some of these Buddy Bots may need to be sacrificed to repair your exosuit or to rain fire on your enemies. Can you hold off long enough to complete the upload, or will humanity lose their last glimmer of hope?',
		],
		features: [
			{
				title: 'Grow Your Army',
				description:
					'Exploit the enemies weakness and convert them to your side',
				image: './images/games/lastKey1.jpg',
				backgroundImage: './images/games/lastKey1.jpg',
			},
			{
				title: 'Survive Overwhelming Odds',
				description: 'Fight your way through countless waves of enemies',
				image: './images/games/lastKey2.jpg',
				backgroundImage: './images/games/lastKey2.jpg',
			},
			{
				title: 'Save Humanity',
				description:
					'Upload your consciousness off world so that humanity may live on',
				image: './images/games/lastKey3.jpg',
				backgroundImage: './images/games/lastKey3.jpg',
			},
		],
		buyLinks: [{ title: 'Buy Now', url: '#' }],
		media: [
			{ image: './images/games/lastKey1.jpg', url: '#' },
			{ image: './images/games/lastKey2.jpg', url: '#' },
			{ image: './images/games/lastKey3.jpg', url: '#' },
			{ image: './images/games/lastKeyMenu.jpg', url: '#' },
		],
	},
	{
		title: 'Avarice',
		tagline: 'Sacrifices Must Be Made!',
		coverImage: './images/avarice.jpg',
		trailer: '#',
		mobile: false,
		description: [
			'Avarice is a game of timing, skill, and curses! Kill skeletons with sword and spell to collect gems that increase your score. But beware, many gems are cursed and will make you weaker, while your enemies grow in strength. How many can you collect before you succumb to your inevitable fate?',
		],
		features: [
			{
				title: 'Avoid Curses',
				description: 'Many gems strengthen your enemies and leave you weaker',
				image: './images/games/avarice1.jpg',
				backgroundImage: './images/games/avarice1.jpg',
			},
			{
				title: 'Survive As Long As You Can',
				description:
					'How long can you survive against an ever growing horde of enemies?',
				image: './images/games/avarice2.jpg',
				backgroundImage: './images/games/avarice2.jpg',
			},
		],
		buyLinks: [{ title: 'Buy Now', url: '#' }],
		media: [
			{ image: './images/games/avarice1.jpg', url: '#' },
			{ image: './images/games/avarice2.jpg', url: '#' },
			{ image: './images/games/avariceUi.jpg', url: '#' },
		],
	},
	{
		title: 'Writer Unblocked',
		tagline: "Stumped by writer's block? Writer Unblocked can help!",
		coverImage: './images/writerUnblocked.jpg',
		trailer: '#',
		mobile: false,
		description: [
			'Ranging from serious to hilarious, these randomly generated writing exercises will get your creative juices flowing! Features four different types of prompts and over 250,000 possible combinations.',
		],
		features: [
			{
				title: 'Find Inspiration',
				description:
					'With prompts ranging from serious to ludicrous, there is something for everyone',
				image: './images/games/writerUnblocked1.jpg',
				backgroundImage: './images/games/writerUnblocked1.jpg',
			},
			{
				title: 'Limitless Possibilities',
				description:
					'With over, 250,000 possible combinations, you will never run out of ideas',
				image: './images/games/writerUnblocked2.jpg',
				backgroundImage: './images/games/writerUnblocked2.jpg',
			},
		],
		buyLinks: [{ title: 'Buy Now', url: '#' }],
		media: [
			{ image: './images/writerUnblocked.jpg', url: '#' },
			{ image: './images/games/writerUnblocked1.jpg', url: '#' },
			{ image: './images/games/writerUnblocked2.jpg', url: '#' },
		],
	},
];
