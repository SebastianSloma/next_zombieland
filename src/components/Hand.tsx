'use client'

import React from 'react'
import Image from 'next/image'

const Hand = () => {
  return (
    <div>
        <Image src='/sign.png' alt='sign' width={400} height={200}/>
        <Image src='/and.png' alt='hand' width={400} height={200}/>
    </div>
  )
}

export default Hand