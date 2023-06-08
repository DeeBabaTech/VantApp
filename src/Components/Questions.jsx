import React, { useState } from 'react'
import plus from './../assets/plus.png'
import cancel from './../assets/cancel.png'
import './../animate.css'

function Questions(props) {
    const [showContent, setShowContent] = useState(false)
    const [icon, setIcon] = useState(plus)

    const handleClick = () => {
        setShowContent(!showContent)
        showContent ? setIcon(plus) : setIcon(cancel)
    }

    return (
        <div className="border-b border-b-slate-600 pt-7 pb-4 relative">
            <div className="flex justify-between items-center font-bold cursor-pointer" onClick={handleClick}>
                <p> {props.question} </p>
                <img src={icon} className='cursor-pointer' alt="" />
            </div>
            <div className={showContent ? "animate__animated animate__fadeInDown animate__faster mt-5" : "hidden"}>
                {props.answer}
            </div>
        </div>
    )
}

export default Questions