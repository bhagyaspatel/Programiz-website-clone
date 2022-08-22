import React from 'react';

export default function Course({ name, image, showAll }) {
	return (
		<div className='box' >
			<img className='round-img' src={image} alt='Image' height='40px' width='40px'></img>
			<h3>{name}</h3>
		</div>
	);
}
