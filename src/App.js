import React from 'react';
import Navbar from './Navbar';
import study from './assets/images/study.jpg';
import { courses } from './data/coursesList';
import Course from './course';

const App = () => {


	return (
		<div className='page'>
			<Navbar />

			<span className='intro'>
				<div className='text'>
					<h2>learn to code free</h2>

					<p>Learn to code with our beginner-friendly tutorials and examples. Read tutorials and examples, write programs, run code and learn to code.</p>

					<h3>Get the latest tutorials and updates</h3>

					<div className='input-box'>
						<input type="email" placeholder='Enter your email address'></input>
						<button className='btn'>Subscribe</button>
					</div>
				</div>

				<div className='image'>
					<img src={study} alt="study pic" height="500px" width="800px"></img>
				</div>
			</span>

			<span className='intro2'>
				<div className='text'>
					<h3 >Choose What to learn</h3>
					<p>Start learning programming language of your choice.</p>
				</div>
				<div className='courses'>
					{courses.map((course) => {
						const { index, name, image } = course;

						return (
							<Course key={index} name={name} image={image} />
						);
					})}
				</div>
			</span>
		</div >
	);
};

export default App;
