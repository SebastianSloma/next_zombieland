'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
	const secRef = React.useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: secRef,
		offset: ['start end', 'end start'],
	});

	const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
	const xTransform = useTransform(
		scrollYProgress,
		[1, 0.5, 0.1, 0],
		[-1000, 0, 0, 0]
	);
	const scale2 = useTransform(scrollYProgress, [1, 0.5], [0, 2]);
	const xTransform2 = useTransform(
		scrollYProgress,
		[1, 0.5, 0.1, 2],
		[-1000, 0, 0, 0]
	);
	return (
		<div className='h-lvh'>
			<motion.img
				src='/tree3.png'
				alt='sign'
				width={800}
				height={600}
				// className='absolute z-[40] top-0 left-1/2 transform -translate-x-1/2 '
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					scale: scale2,
					x: xTransform2,
				}}
			/>
			<motion.img
				src='/tree2.png'
				alt='sign'
				width={700}
				height={300}
				// className='absolute z-[30] top-1/2 left-0 transform -translate-y-1/2'
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					scale: scale,
					x: xTransform,
				}}
			/>
			<motion.img
				src='/zombie_sign.png'
				alt='sign'
				width={400}
				height={300}
				// className='absolute z-[-100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
				style={{ position: "absolute", top: 0, left: 0, width: "100%", 	scale: scale,
				x: xTransform, }}
			/>
			<motion.img
				src='/tree1.png'
				alt='tree1'
				width={570}
				height={280}
				// className='absolute z-[10]  right-0 '
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					scale: scale,
					x: xTransform,
				}}
			/>

			<motion.img
				src='/tree4.png'
				alt='sign'
				width={500}
				height={400}
				// className='absolute z-[50] bottom-0 left-1/2 transform -translate-x-1/2'
				style={{ position: "absolute", top: 0, left: 0, width: "100%", 	scale: scale,
				x: xTransform, }}
			/>
		</div>
	);
};

export default Hero;
