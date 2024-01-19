'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Horde = () => {
	return (
		<div
			className='w-full h-screen overflow-hidden relative grid place-items-center bg-gradient-to-r from-neutral-300 to-stone-600'
			// ref={ref}
      >
			<motion.img
				src='/cloud1.png'
				alt='cloud'
				width={400}
				height={200}
				className='absolute z-40 top-[0] left-[450px]'
				style={{}}
			/>
			<motion.img
				src='/cloud2.png'
				alt='cloud'
				width={400}
				height={200}
				className='absolute z-30 top-[0] right-[500px]'
				style={{}}
			/>
			<motion.img
				src='/moon.png'
				alt='moon'
				width={300}
				height={200}
				className='absolute z-[10] top-[0]'
				style={{}}
			/>
			<motion.img
				src='/horde2.png'
				alt='zombie'
				width={800}
				height={200}
				className='absolute z-5 bottom-[0]'
				style={{}}
			/>
		</div>
	);
};

export default Horde;
