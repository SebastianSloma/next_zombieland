'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Horde = () => {
	const ref = useRef(null);
	
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 2], [1, 4]);

	const scaleTwo = useTransform(scrollYProgress, [0, 2], [1.5, 4]);

	const xTransform = useTransform(
		scrollYProgress,
		[1, 0, 0, 0],
		[-2000, 0, 0, 0]
	);

	const xTransformTwo = useTransform(
		scrollYProgress,
		[1, 0, 0, 0],
		[2000, 0, 0, 0]
	);

	return (
		<div
			className='w-full h-screen overflow-hidden relative grid place-items-center bg-gradient-to-r from-blue-800 to-stone-600'
			ref={ref}>
			<motion.img
				src='/cloud1.png'
				alt='cloud'
				width={500}
				height={200}
				className='absolute z-40 top-[0] left-[450px]'
				style={{x: xTransform}}
			/>
			<motion.img
				src='/cloud2.png'
				alt='cloud'
				width={500}
				height={200}
				className='absolute z-30 top-[0] right-[500px]'
				style={{x: xTransformTwo}}
			/>
			<motion.img
				src='/moon.png'
				alt='moon'
				width={300}
				height={200}
				className='absolute z-[10] top-[0]'
				style={{scale: scaleTwo}}
			/>
			<motion.img
				src='/horde2.png'
				alt='zombie'
				width={800}
				height={200}
				className='absolute z-50 bottom-[0]'
				style={{ scale: scale }}
			/>
		</div>
	);
};

export default Horde;
