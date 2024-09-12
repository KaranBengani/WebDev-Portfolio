import React, { useEffect, useState } from 'react'

import BoxReveal  from "../../../../@/components/magicui/box-reveal";
import { ISkillData } from './interface';
import { useAnimation } from 'framer-motion';
import './styles/style.css'


const skillData = {
  "default":{ heading : "Default" ,
  content : "hehe",
},
  "typescript": { heading : "type" ,
  content : "type",
},
  "javascript": { heading : "" ,
  content : "",
},
  "dart": { heading : "" ,
  content : "",
},
  "java": { heading : "" ,
  content : "",
},
  "react": { heading : "" ,
  content : "",
},
  "flutter": { heading : "" ,
  content : "",
},
  "android": { heading : "" ,
  content : "",
},
  "html5": { heading : "" ,
  content : "",
},
  "css3": { heading : "" ,
  content : "",
},
  "nodedotjs": { heading : "" ,
  content : "",
},
  "express": { heading : "" ,
  content : "",
},
  "nextdotjs": { heading : "" ,
  content : "",
},
  "postgresql": { heading : "" ,
  content : "",
},
  "firebase": { heading : "" ,
  content : "",
},
  "jest": { heading : "" ,
  content : "",
},
  "git": { heading : "" ,
  content : "",
},
  "jira": { heading : "" ,
  content : "",
},
  "github": { heading : "" ,
  content : "",
},
  "gitlab": { heading : "" ,
  content : "",
},
  "visualstudiocode": { heading : "" ,
  content : "",
},
  "androidstudio": { heading : "" ,
  content : "",
},
  "sonarqube": { heading : "" ,
  content : "",
},
  "figma": { heading : "" ,
  content : "",
},
  "solid": { heading : "" ,
  content : "",
},
  "angular": { heading : "" ,
  content : "",
},
  "postman": { heading : "" ,
  content : "",
},
  "tailwindcss": { heading : "" ,
  content : "",
},
  "bootstrap": { heading : "" ,
  content : "",
},
  "sanity": { heading : "" ,
  content : "",
},
  "mongodb": { heading : "" ,
  content : "",
},
}
type skillContent = {
  skill : string
}
const SkillContent = ({skill} : skillContent) => {
  const [skillCont, setSkillCont] = useState<ISkillData>()
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(()=>{
    console.log(skill)
    const newSkillContent = skillData[skill] || skillData.default
    setSkillCont(newSkillContent);
    slideControls.start("visible");
    mainControls.start("visible");
  },[skill])
  return (
       <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8 md:mx-auto">
      <BoxReveal boxColor={"#5046e6"} duration={0.5} >
        <p className="text-[3.5rem] font-semibold">
          Magic UI<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5} >
        <h2 className="mt-[.5rem] text-[1rem]">
          UI library for{" "}
          <span className="text-[#5046e6]">{skillCont?.heading}</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5} >
        <div className="mt-[1.5rem]">
          <p>
            {/* -&gt; 20+ free and open-source animated components built with
            <span className="font-semibold text-[#5046e6]"> React</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Framer Motion</span>
            . <br />
            -&gt; 100% open-source, and customizable. <br /> */}
            {skillCont?.content}
          </p>
        </div>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal> */}
    <div className="blog_post max-w-lg bg-slate-200 rounded-xl relative text-sm">
  <div className="img_pod h-28 w-28 bg-[linear-gradient(90deg, #ff9966, #ff5e62)] z-10 absolute left-[-10%] top-[-13%] flex items-center justify-center">
    <img src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg" alt="random image" className='h-32 w-32 relative rounded-full z-[1]'/>
  </div>
  <div className="container_copy p-[6rem 4rem 5rem 4rem]">
    <h3>12 January 2019</h3>
    <h1>CSS Positioning</h1>
    <p>The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).</p>
    <a className="btn_primary" href='#' target="_blank">Read More</a>
  </div>
  
</div>
    </div>
  )
}

export default SkillContent
