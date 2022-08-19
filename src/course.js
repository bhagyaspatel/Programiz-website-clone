import React from 'react';

export default function Course({ name, image }) {
	console.log(name);
	return (
		<div className='box'>
			<img src={image} alt='Image' height='2rem' width='2rem'></img>
			<h4>{name}</h4>
		</div>
	);
}
