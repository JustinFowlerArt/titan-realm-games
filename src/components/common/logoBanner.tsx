interface Props {
	height: number;
}

export const LogoBanner = ({ height }: Props) => {
	const styles = {
		height: `${height}rem`,
	};

	return (
		<a href='#'>
			<img
				src='./images/logoBannerDark.png'
				className='hover:brightness-50 hover:contrast-125 hover:saturate-150'
				style={styles}
			></img>
		</a>
	);
};
