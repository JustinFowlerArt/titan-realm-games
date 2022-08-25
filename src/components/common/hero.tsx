import { LinkInfo } from '../../data/types';
import { H1 } from './h1';
import { LinkButton } from './linkButton';

interface Props {
    title: React.ReactNode;
    cover?: string;
    links?: LinkInfo[];
    logo?: React.ReactNode;
    className?: string;
}

export const Hero = ({ title, cover, logo, links, className }: Props) => {
    let styles = { minHeight: 'calc(100vh - 5rem)' };
    if (cover) {
        styles = Object.assign(styles, { backgroundImage: `url(${cover})` });
    }

    return (
        <div
            className={`flex items-center justify-center w-full bg-cover bg-center lg:bg-top ${className} ${
                cover ? 'bg-gray-400 bg-blend-multiply' : ''
            }`}
            style={styles}
        >
            <div className='flex flex-col items-center space-y-6'>
                {logo}
                <H1>{title}</H1>
                <div className='flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6'>
                    {links?.map((link, i) => (
                        <LinkButton
                            key={i}
                            link={{ title: link.title, url: link.url }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
