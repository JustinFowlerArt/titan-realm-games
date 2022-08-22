import { Link } from 'react-router-dom';

interface Props {
    option?: string;
    className?: string;
    link?: boolean;
}

export const Logo = ({ option, className, link = false }: Props) => {
    let image = '/images/logoDark.png';
    switch (option) {
        case 'banner':
            image = '/images/logoBannerDark.png';
            break;
        case 'compact':
            image = '/images/logoCompactDark.png';
            break;
        default:
            break;
    }

    return (
        <>
            {link ? (
                <Link to='/'>
                    <img
                        src={image}
                        className={`hover:brightness-50 hover:contrast-125 hover:saturate-150 ${className}`}
                    />
                </Link>
            ) : (
                <img className={className} src={image}></img>
            )}
        </>
    );
};
