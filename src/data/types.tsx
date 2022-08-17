export type Slide = {
	image: string;
	url: string;
};

export type LinkInfo = {
	title: string;
	url: string;
};

export type Game = {
	id: number;
	price?: number;
	title: string;
	coverImage: string;
	description: string[];
	features: Feature[];
	buyLinks?: LinkInfo[];
	media: string[];
};

type Feature = {
	title: string;
	description: string;
};
