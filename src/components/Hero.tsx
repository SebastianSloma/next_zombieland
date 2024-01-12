import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <Image src='/zombie_sign.png' alt='sign' width={400} height={300} />
    </div>
  )
}

export default Hero