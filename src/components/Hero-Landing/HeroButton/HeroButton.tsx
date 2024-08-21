import React, { useEffect, useRef, useState } from 'react'
import '@iconscout/unicons/css/line.css';

const HeroButton = () => {

    const [text, setText] = useState('CONTACT ME - SEND ME AN EMAIL')
    const myref = useRef<HTMLParagraphElement | null>(null)
    useEffect(() => {
        if (myref.current) {
            myref.current.innerHTML = text.split('').map((character, index) => `<span class="absolute origin-[0.3rem_2rem]" style="transform: rotate(${index * 12}deg)">${character}</span>`).join('');
        }
    }, [])

    return (
        <>
            {/* <button className='p-2 rounded ring-cm-blue ring-2 text-cm-blue font-bold text-lg hover:text-gray-950 hover:bg-cm-blue hover:transition-transform'>Contact Me</button> */}
            <a href="mailto:karanbengani14@gmail.com" id="contact_btn"
                className="w-[4rem] h-[4rem] rounded-full text-gray-400 grid place-items-center absolute  2xl:left-[26%] 2xl:bottom-[31.5%] xl:left-[37%] xl:bottom-[32.5%] lg:left-[40%] md:right-[27%] md:bottom-[33%] sm:right-[14%] sm:bottom-[35.5%] bottom-[20%] cursor-pointer [transition:all_400ms_ease] hover:-translate-y-[1rem] ">
                <i className="uil uil-arrow-up-right absolute text-[1.5rem] text-cm-blue"></i>
                <p
                    className="font-semibold w-[4rem] h-[4rem] flex justify-center animate-[spinText_30s_linear_infinite] text-[0.55rem] text-white" ref={myref}>
                    {text}
                </p>
            </a>
        </>
    )
}

export default HeroButton