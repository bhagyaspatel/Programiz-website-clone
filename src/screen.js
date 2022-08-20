import React, { useEffect, useState } from 'react';
import { images } from './data/images';

export default function Screen() {

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const screen = setInterval(() => {
			setIndex((index + 1) % images.length);
			console.log("screenImage " + index);
		}, 3000);

		return () => {
			clearInterval(screen);
		};

	}, [index]);

	return (
		<div className='screen-box'>
			<img src={images[index]} alt='screen' />
		</div>
	);
}
