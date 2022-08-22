export type Slide = {
    image: string;
    url?: string;
};

export type LinkInfo = {
    title: string;
    url: string;
};

export type Feature = {
    title: string;
    description: string;
    image: string;
    backgroundImage: string;
};

export type Game = {
    title: string;
    tagline: string;
    coverImage: string;
    date: string;
    trailer: string;
    mobile: boolean;
    description: string[];
    features: Feature[];
    buyLinks: LinkInfo[];
    media: Slide[];
};
