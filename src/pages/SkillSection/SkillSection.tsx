import SkillContent from '@/components/Skills/SkillContent/SkillContent'
import SkillGlobe from '@/components/Skills/SkillGlobe/SkillGlobe'
import React from 'react'

const SkillSection = () => {
  return (
    <>
    <div className="h-dvh w-dvh flex justify-center items-center relative">
        <h2 className='absolute z-[-999] font-extrabold text-[#2d2d2e] text-[22rem] left-0 bottom-[-70px] tracking-[-10px] '>Skills</h2>
        <div className="w-1/2">
        <SkillContent/></div>
        <div className="w-1/2">
        <SkillGlobe/></div>
    </div>
    </>
  )
}

export default SkillSection