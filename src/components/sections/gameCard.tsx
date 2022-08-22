import { Link } from 'react-router-dom';
import { Game } from '../../data/types';
import { urlFormat } from '../../utils/urlFormat';

interface Props {
    game: Game;
}

export const GameCard = ({ game }: Props) => {
    return (
        <div className='bg-gray-800'>
            <Link to={urlFormat(game.title)}>
                <img src={game.coverImage} className='w-full aspect-video' />
                <div className='space-y-3 px-3 py-6 md:p-6'>
                    <h4>{game.date}</h4>
                    <h3 className='text-xl font-bold'>{game.tagline}</h3>
                    <p className='relative'>
                        {game.description[0]}
                        <span className='absolute right-0'>&#10141;</span>
                    </p>
                </div>
            </Link>
        </div>
    );
};
