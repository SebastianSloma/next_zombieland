import React from 'react';
import Image from 'next/image';

const House = () => {
	return (
		<div>
			<Image src='/house.png' alt='house' width={200} height={200} />
			<Image src='/horde.png' alt='horde' width={200} height={200} />
		</div>
	);
};

export default House;
