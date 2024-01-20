'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const House = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 2], [1, 4]);

	const scaleTwo = useTransform(scrollYProgress, [0, 2], [1.5, 4]);
	return (
		<div
			className='w-full h-screen overflow-hidden relative grid place-items-center bg-gradient-to-r from-orange-300 to-stone-600'
			ref={ref}>
			<motion.img
				src='/house.png'
				alt='house'
				width={1000}
				height={200}
				className='absolute z-30  bottom-[0]'
				style={{ scale: scale }}
			/>
			<motion.img
				src='/horde.png'
				alt='horde'
				width={800}
				height={200}
				className='absolute z-40  bottom-[0]'
				style={{ scale: scaleTwo }}
			/>
			<div></div>
		</div>
	);
};

export default House;
