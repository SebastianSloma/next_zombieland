'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const House = () => {
	return (
		<div
			className='w-full h-screen overflow-hidden relative grid place-items-center bg-gradient-to-r from-orange-300 to-stone-600'
			// ref={ref}>
		>
			<motion.img
				src='/house.png'
				alt='house'
				width={200}
				height={200}
				className='absolute z-40 top-[0] bottom-0'
				style={{}}
			/>
			<motion.img
				src='/horde.png'
				alt='horde'
				width={200}
				height={200}
				className='absolute z-40 top-[0] left-[450px]'
				style={{}}
			/>
		</div>
	);
};

export default House;
