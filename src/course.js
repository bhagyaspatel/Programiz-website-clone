import React from 'react';

export default function Course({ name, image, showAll }) {
	console.log(name);
	return (
		<div className='box' >
			<img src={image} alt='Image' height='2rem' width='2rem'></img>
			<h3>{name}</h3>
		</div>
	);
}
