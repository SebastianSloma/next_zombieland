import React from 'react'
import Image from 'next/image'

const Horde = () => {
  return (
    <div>

        <Image src='/cloud1.png' alt='cloud' width={200} height={200}/>
        <Image src='/cloud2.png' alt='cloud' width={200} height={200}/>
        <Image src='/moon.png' alt='moon' width={200} height={200}/>
        <Image src='/horde.png' alt='zombie' width={200} height={200}/>
   
    </div>
  )
}

export default Horde