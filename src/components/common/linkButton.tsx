import { Link } from 'react-router-dom';
import { LinkInfo } from '../../data/types';

interface Props {
    link: LinkInfo;
    glyph?: string;
}

export const LinkButton = ({ link, glyph }: Props) => {
    const isExternalLink = (url: string) => {
        return url.startsWith('http') || url.startsWith('mailto');
    };

    return (
        <>
            {isExternalLink(link.url) ? (
                <a href={link.url} target='_blank' rel='noreferrer'>
                    <button className='border-2 bg-black/50 border-titan-light-blue text-titan-light-blue px-6 pb-3 pt-2 lg:text-2xl hover:text-titan-dark-blue hover:border-titan-dark-blue'>
                        {link.title}
                        {glyph && <span className='ml-2'>{glyph}</span>}
                    </button>
                </a>
            ) : (
                <Link to={link.url}>
                    <button className='border-2 bg-black/50 border-titan-light-blue text-titan-light-blue px-6 pb-3 pt-2 lg:text-2xl hover:text-titan-dark-blue hover:border-titan-dark-blue'>
                        {link.title}
                        {glyph && <span className='ml-2'>{glyph}</span>}
                    </button>
                </Link>
            )}
        </>
    );
};
