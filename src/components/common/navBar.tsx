import { Link } from '../../data/types';

interface Props {
	links: Link[];
}

export const NavBar = ({ links }: Props) => {
	return (
		<nav>
			<ul className='flex flex-col items-center p-3 text-lg font-semibold text-titan-light-blue lg:flex-row lg:p-0 xl:space-x-8'>
				{links?.map(link => (
					<a
						className='p-3 hover:text-titan-dark-blue hover:border-titan-dark-blue'
						key={link.title}
						href={link.url}
					>
						{link.title}
					</a>
				))}
			</ul>
		</nav>
	);
};
