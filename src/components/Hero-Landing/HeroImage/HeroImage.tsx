import React from 'react'

const HeroImage = ({imagePath}:any) => {
  return (
    <>
        <img src={imagePath} alt="Profile pic" className='h-screen w-full object-contain object-center lg:max-xl:pt-40'/>
    </>
  )
}

export default HeroImage