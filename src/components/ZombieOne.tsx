import React from 'react'
import Image from 'next/image'

const ZombieOne = () => {
  return (
    <div>
        <Image src='/zombie1.png' alt='zombie' width={200} height={200}/>
        <Image src='/zombie2.png' alt='zombie' width={200} height={200}/>
        <Image src='/zombie3.png' alt='zombie' width={200} height={200}/>
        <Image src='/forest.png' alt='forest' width={200} height={200}/>
    </div>
  )
}

export default ZombieOne