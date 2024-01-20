'use client'

import React from 'react'
import Image from 'next/image'

const Hand = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative grid place-items-center bg-gradient-to-r from-lime-800 to-stone-500'>
        <Image src='/sign.png' alt='sign' width={400} height={200} className='absolute z-20 top-[0] left-[400px]'/>
        <Image src='/hand.png' alt='hand' width={600} height={500} className='absolute z-30 bottom-[0]'/>
    </div>
  )
}

export default Hand