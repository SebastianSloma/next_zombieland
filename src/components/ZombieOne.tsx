'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ZombieOne = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.1]);
	const scaleTwo = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);

	const xTransform = useTransform(
		scrollYProgress,
		[1, 0, 0, 0],
		[-1000, 0, 0, 0]
	);
	const xTransformTwo = useTransform(
		scrollYProgress,
		[1, 0.2, 0, 0],
		[1000, 0, 0, 0]
	);

	return (
		<div
			className='w-full h-screen overflow-hidden relative grid place-items-center bg-gradient-to-r from-gray-300 to-gray-500'
			ref={ref}>
			{/* zombie right */}
			<motion.img
				src='/zombie1.png'
				alt='zombie'
				width={250}
				height={200}
				className='absolute z-20  top-[300px] right-[-100px]'
				style={{
					x: xTransform,
				}}
			/>
			{/* zombie left */}
			<motion.img
				src='/zombie2.png'
				alt='zombie'
				width={250}
				height={200}
				className='absolute z-30  top-[240px] left-[-100px]'
        style={{
					x: xTransformTwo
				}}
			/>
			{/* zombie middle */}
			<motion.img
				src='/zombie3.png'
				alt='zombie'
				width={300}
				height={200}
				className='absolute z-20  top-[200px] left-[650px]'
				style={{
					scale: scaleTwo,
				}}
			/>
			{/* background */}
			<motion.img
				src='/forest.png'
				alt='forest'
				width={1400}
				height={200}
				className='absolute z-10 '
				style={{
					scale: scale,
				}}
			/>
		</div>
	);
};

export default ZombieOne;
