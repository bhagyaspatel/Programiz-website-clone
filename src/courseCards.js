import React from 'react';

export default function CourseCards({ name, image }) {
	return (
		<div data-aos="flip-left" className='card'>
			<h3> Interactive {name}</h3>
			<img className='round-img' src={image} height='80px' width='80px' />
		</div>
	);
}

