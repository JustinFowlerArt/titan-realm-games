import { LinkButton } from './common/linkButton';

export const About = () => {
	return (
		<div className='flex flex-col items-center px-3 py-6 max-w-6xl lg:flex-row lg:justify-between lg:px-6 xl:p-20'>
			<div className='w-1/2 lg:order-2'>
				<img src='/images/wompySplash.jpg' />
			</div>
			<div className='w-1/2'>
				<h2 className='text-3xl font-semibold text-titan-light-blue mb-6'>
					About
				</h2>
				<p className='mb-6'>
					Titan Realm Games is a game studio founded by three college students
					in search of something epic.
				</p>
				<LinkButton
					link={{ title: 'Learn More', url: '/about' }}
					glyph='&#10141;'
				/>
			</div>
		</div>
	);
};
