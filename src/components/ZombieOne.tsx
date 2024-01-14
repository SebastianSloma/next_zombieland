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
	const scaleTwo = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

	return (
		<div
			className='w-full h-screen overflow-hidden relative grid place-items-center bg-gradient-to-r from-gray-300 to-gray-500'
			ref={ref}>
			<motion.img
				src='/zombie1.png'
				alt='zombie'
				width={250}
				height={200}
				className='absolute z-20  top-[300px] right-[300px]'
			/>
			<motion.img
				src='/zombie2.png'
				alt='zombie'
				width={250}
				height={200}
				className='absolute z-30  top-[250px] left-[300px]'
			/>
			<motion.img
				src='/zombie3.png'
				alt='zombie'
				width={200}
				height={200}
				className='absolute z-20  top-[350px] left-[650px]'
			/>
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
