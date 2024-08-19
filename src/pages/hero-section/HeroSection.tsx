import React from 'react'
import HeroContent from '../../components/Hero-Landing/HeroContent/HeroContent'
import HeroImage from '../../components/Hero-Landing/HeroImage/HeroImage'
import HeroButton from '../../components/Hero-Landing/HeroButton/HeroButton'

const HeroSection = () => {
    return (
        <>
            <div className="h-dvh w-dvh flex justify-center items-center">
                <div className="lg:w-1/2 flex justify-center align-middle lg:pl-5 xl:max-2xl:pl-2">
                    <HeroContent/>
                </div>
                <div className="w-1/2 hidden lg:block">
                    <HeroImage imagePath={"/src/assets/karan-new-.svg"} />
                </div>
            </div>
        </>
    )
}

export default HeroSection