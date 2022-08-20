import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai';
import Navbar from './Navbar';
import study from './assets/images/study.jpg';
import { courses } from './data/coursesList';
import { lines } from './data/lines';
import Course from './course';
import Line from './line';
import Screen from './screen';

const App = () => {

	const [showAll, setshowAll] = useState(true); //to set showAll on number of ocourses visible
	//similar to "view more" "view less"

	const [courseList, setCourseList] = useState(courses.slice(0, 4));
	const [greenIndex, setGreenIndex] = useState(0); //for choosing which line to show as green

	const handle = () => {
		setshowAll(!showAll);
		if (showAll) {
			setCourseList(courses.slice(0, courses.length));
		}
		else {
			setCourseList(courses.slice(0, 4));
		}
	};

	useEffect(() => {
		let toggle = setInterval(() => {
			setGreenIndex((greenIndex + 1) % lines.length);
		}, 3000);

		return () => {
			clearInterval(toggle);
		};

	}, [greenIndex]);

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
					{courseList.map((course) => {
						const { index, name, image } = course;

						return (
							<Course key={index} name={name} image={image} showALl={showAll} />
						);
					})}
					<div className='box'>
						<button className='box-btn' onClick={() => handle()}>
							{showAll ? "View all tutorials" : "View less tutorials"}
						</button>
						{showAll ? <AiOutlineArrowRight className='right arrow' ></AiOutlineArrowRight> : <AiOutlineArrowUp className='left arrow' ></AiOutlineArrowUp>}
					</div>
				</div>
			</span>

			<span className='intro grey'>
				<div className='text'>
					<h2>Programiz PRO
						Prepare for Your Career</h2>
					<ul className='options'>
						{
							lines.map((line, index) => {
								return <Line key={index} line={line} index={index} greenIndex={greenIndex} />;
							})
						}
					</ul>
					<button className='box-btn-free' onClick={() => handle()}>
						Join for FREE
					</button>
				</div>

				<div className='image'>
					<Screen />
				</div>
			</span>
		</div >
	);
};

export default App;
