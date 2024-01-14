'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	const { scrollY } = useScroll();
	const x = useTransform(scrollY, [0, 500], [0, 1000]);

	const treeUp = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const treeLeft = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
	const sign = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const treeRight = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

	return (
		<div
			ref={ref}
			className='w-full h-screen overflow-hidden relative grid place-items-center'>
			{/* tree up */}
			<motion.img
				src='/tree3.png'
				alt='sign'
				width={800}
				height={600}
				className='relative z-40 '
				style={{ y: treeUp }}
				// className='relative z-10'
			/>
			{/* tree left */}
			<motion.img
				src='/tree2.png'
				alt='tree'
				width={700}
				height={300}
				// className='relative z-30 top-1/2 left-0 transform -translate-y-1/2'
				style={{ y: treeLeft }}
				className='relative z-12  top-[-400px] left-[-400px]'
			/>
			{/* sign */}
			<motion.img
				src='/zombie_sign.png'
				alt='sign'
				width={400}
				height={300}
				className='absolute z-[-100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
				style={{ y: sign }}
			/>
			{/* tree right */}
			<motion.img
				src='/tree1.png'
				alt='tree1'
				width={570}
				height={280}
				className='absolute z-[10]  right-0 '
				style={{ x }}
			/>
		</div>
	);
};

export default Hero;
