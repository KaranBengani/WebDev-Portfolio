import React from 'react'
import './styles/style.scss'
import HeroButton from '../HeroButton/HeroButton'

const HeroContent = () => {
    return (
        <>
            {/* border-b-8 border-cm-red border-spacing-0 */}
            <div className="">
                <h1 className='herotext p-4 leading-10 md:p-0 text-[2.7rem] md:text-[4.7rem] md:leading-[65px] lg:text-[4rem] xl:leading-[55px] 2xl:text-[6.3rem] 2xl:leading-[85px] tracking-tighter text-white font-bold w-fit relative md:mx-auto'>Hi, <br /> I'm <span className='border-b-4 md:border-b-8  border-cm-red border-spacing-0 h-fit'><span className='text-cm-blue'>K</span>aran</span>, <br /> A Web Developer</h1>
                <p className='herotagline p-4 md:p-0 uppercase w-fit mt-16 text-sm text-[#a2a2a3] relative md:text-lg tracking-[3px] '>i Excel at Web Technologies</p>
                <div className="mt-12"><HeroButton/></div>
            </div>
        </>
    )
}

export default HeroContent