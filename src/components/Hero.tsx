import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<div className='h-lvh'>
			<Image
				src='/tree3.png'
				alt='sign'
				width={800}
				height={600}
				className='absolute z-[40] top-0 left-1/2 transform -translate-x-1/2 '
			/>
			<Image
				src='/tree2.png'
				alt='sign'
				width={700}
				height={300}
				className='absolute z-[30] top-1/2 left-0 transform -translate-y-1/2'
			/>
			<Image
				src='/zombie_sign.png'
				alt='sign'
				width={400}
				height={300}
				className='absolute z-[-100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
			/>
			<Image
				src='/tree1.png'
				alt='tree1'
				width={570}
				height={280}
				className='absolute z-[10]  right-0 '
			/>

			<Image
				src='/tree4.png'
				alt='sign'
				width={500}
				height={400}
				className='absolute z-[50] bottom-0 left-1/2 transform -translate-x-1/2'
			/>
		</div>
	);
};

export default Hero;
