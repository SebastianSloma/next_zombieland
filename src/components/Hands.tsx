import React from 'react'
import Image from 'next/image'

const Hands = () => {
  return (
    <div>
         <Image src='/hand1.png' alt='hand' width={200} height={200}/>
        <Image src='/hand2.png' alt='hand' width={200} height={200}/>
     
    </div>
  )
}

export default Hands