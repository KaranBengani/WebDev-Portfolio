import React from 'react'
import IconCloud from "../../../../@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "postgresql",
    "firebase",
    "jest",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
    "solid",
    "angular",
    "postman",
    "tailwindcss",
    "bootstrap",
    "sanity",
    "mongodb",
    ""
  ];

type skillGlobe = { 
  setSkill : React.Dispatch<React.SetStateAction<string>>
}

const SkillGlobe = ({setSkill} :skillGlobe) => {
  return (
     <div className="relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 cursor-pointer" style={{cursor: "pointer !important"}}>
      <IconCloud iconSlugs={slugs} setSkill={setSkill} />
    </div>
  )
}

export default React.memo(SkillGlobe)
