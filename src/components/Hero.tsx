import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<div>
			<Image
				src='/tree3.png'
				alt='sign'
				width={1000}
				height={600}
				className='absolute z-[-40] inset-x-0 top-0 '
			/>
			<Image
				src='/tree2.png'
				alt='sign'
				width={400}
				height={300}
				className='absolute z-[-30] inset-y-0 left-0'
			/>
			<Image
				src='/zombie_sign.png'
				alt='sign'
				width={400}
				height={300}
				className='absolute z-[-100] top-250 right-250 '
			/>
			<Image
				src='/tree1.png'
				alt='tree1'
				width={600}
				height={300}
				className='absolute inset-y-0 right-0   z-[10]'
			/>

			<Image
				src='/tree4.png'
				alt='sign'
				width={800}
				height={400}
				className='absolute z-[-22] inset-x-0 bottom-0'
			/>
		</div>
	);
};

export default Hero;
