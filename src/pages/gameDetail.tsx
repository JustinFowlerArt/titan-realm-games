import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../data/types';
import { Carousel } from '../components/common/carousel';
import { Hero } from '../components/common/hero';
import { FeatureDetail } from '../components/sections/featureDetail';
import { H2 } from '../components/common/h2';
import { Main } from '../components/layout/main';
import { Section } from '../components/layout/section';
import { PageNotFound } from './pageNotFound';
import { FeatureImage } from '../components/sections/featureImage';
import { urlFormat } from '../utils/urlFormat';
import { Grid } from '../components/layout/grid';

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
                    return urlFormat(game.title).includes(slug.toLowerCase());
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
                    <Section>
                        <div className='space-y-6 text-center w-2/3'>
                            <H2>{game.tagline}</H2>
                            {game.description.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </Section>
                    <Grid
                        className={`!gap-0 ${
                            game.mobile ? 'lg:grid-cols-2' : '!grid-cols-1'
                        }`}
                    >
                        {game.features.map((feature, i) =>
                            (i + 1) % 2 === 1 ? (
                                <Grid
                                    key={i}
                                    className={`!gap-0 ${
                                        game.mobile ? 'grid-cols-2' : ''
                                    }`}
                                >
                                    <FeatureImage
                                        feature={feature}
                                        mobile={game.mobile}
                                    />
                                    <FeatureDetail
                                        feature={feature}
                                        mobile={game.mobile}
                                    />
                                </Grid>
                            ) : (
                                <Grid
                                    key={i}
                                    className={`!gap-0 ${
                                        game.mobile ? 'grid-cols-2' : ''
                                    }`}
                                >
                                    <FeatureDetail
                                        feature={feature}
                                        mobile={game.mobile}
                                    />
                                    <FeatureImage
                                        feature={feature}
                                        mobile={game.mobile}
                                        className={`${
                                            game.mobile
                                                ? 'md:-order-1'
                                                : '-order-1 md:order-2'
                                        }`}
                                    />
                                </Grid>
                            )
                        )}
                    </Grid>
                    <Section>
                        <H2>Media</H2>
                        <Carousel
                            slides={game.media}
                            lightbox={true}
                            mobile={game.mobile}
                        />
                    </Section>
                </Main>
            ) : (
                <PageNotFound />
            )}
        </>
    );
};
