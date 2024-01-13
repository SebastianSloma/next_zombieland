import React from 'react';
import Image from 'next/image';

const Road = () => {
	return (
		<div>
			<Image src='/zombie4.png' alt='zombie' width={200} height={200} />
			<Image src='/road.png' alt='road' width={200} height={200} />
			<Image src='/zombie6.png' alt='zombie' width={200} height={200} />
		</div>
	);
};

export default Road;
