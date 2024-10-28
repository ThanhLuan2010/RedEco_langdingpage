import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='w-[100%] flex justify-stretch gap-4'>
    <div className='bg-red-500 w-[60%]'>
        <Image 
        alt='banner_gallary'
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        src={require("../../../public/image/gallary/banner1.png")} 
        />
    </div>

    <div className='bg-green-500 w-[40%] flex flex-col gap-4'>
        <div className='h-[50%]'>
        <Image 
            alt='banner_gallary'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            src={require("../../../public/image/gallary/banner2.png")} 
        />
    </div>
    <div className='h-[50%]'>
      <Image 
        alt='banner_gallary'
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        src={require("../../../public/image/gallary/banner3.png")} 
      />
    </div>
  </div>
</div>


  )
}

export default Banner