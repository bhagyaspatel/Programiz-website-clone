import React from 'react';

export default function CourseCards({ name, image }) {
	return (
		<div className='card'>
			<h3>Interactive {name}</h3>
			<img className='round-img' src={image} height='80px' width='80px' />
		</div>
	);
}
