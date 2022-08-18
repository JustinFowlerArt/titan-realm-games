import { H1 } from '../layout/h1';

interface Props {
	title: React.ReactNode;
	cover: string;
	logo?: React.ReactNode;
	links?: React.ReactNode;
}

export const Hero = ({ title, cover, logo, links }: Props) => {
	return (
		<div
			className='flex items-center justify-center w-full bg-cover bg-center bg-gray-400 bg-blend-multiply lg:bg-top'
			style={{
				backgroundImage: `url(${cover})`,
				minHeight: 'calc(100vh - 5rem)',
			}}
		>
			<div className='flex flex-col items-center space-y-6'>
				{logo}
				<H1>{title}</H1>
				<div className='flex space-x-6'>{links}</div>
			</div>
		</div>
	);
};
