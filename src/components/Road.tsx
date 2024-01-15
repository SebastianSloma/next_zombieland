'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Road = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 2], [1, 4]);
	const scaleTwo = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);

	const xTransform = useTransform(
		scrollYProgress,
		[1.5, -0.7, 0, 0],
		[-1000, 0, 0, 0]
	);

	return (
		<div
			className='w-full h-screen overflow-hidden relative grid place-items-center bg-gradient-to-r from-slate-300 to-zinc-600'
			ref={ref}>
			<motion.img
				src='/zombie4.png'
				alt='zombie'
				width={300}
				height={200}
				className='absolute z-20  bottom-[0] left-[300px]'
				style={{scale: scaleTwo}}
			/>
			<motion.img
				src='/road.png'
				alt='road'
				width={600}
				height={200}
				className='absolute z-10 bottom-[0] '
				style={{
					scale: scale,
				}}
			/>
			<motion.img
				src='/zombie6.png'
				alt='zombie'
				width={200}
				height={200}
				className='absolute z-40  bottom-[0] right-[100px]'
				style={{x: xTransform,
				scale: scale
				}}
			/>
		</div>
	);
};

export default Road;
