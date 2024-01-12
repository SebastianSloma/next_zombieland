import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<div>
			<div className='h-screen'>
                <div>
                <Image
					src='/tree3.png'
					alt='sign'
					width={400}
					height={300}
					className='relative z-[-1]'
				/>
                </div>
				<Image
					src='/tree2.png'
					alt='sign'
					width={400}
					height={300}
					className='relative z-[-1]'
				/>
				<Image
					src='/zombie_sign.png'
					alt='sign'
					width={400}
					height={300}
					className='relative z-[-1]'
				/>
                <Image src='/tree1.png'
					alt='tree1'
					width={400}
					height={300}
					className='relative top-0 right-52 z-[1]'/>
			</div>
            <div>
            <Image
					src='/tree4.png'
					alt='sign'
					width={800}
					height={400}
					className='relative z-[-1]'
				/>
            </div>
		</div>
	);
};

export default Hero;
