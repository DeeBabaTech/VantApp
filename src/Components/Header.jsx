import React, { useState } from 'react'
import logo from './../assets/logo.png'
import './Header.css'



function Header() {
    const value = false
    const [click, setClick] = useState(value);

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <nav className="flex items-center justify-between w-10/12 m-auto pt-5" >
                <img src={logo} className="lg:w-44 w-32" alt="" />
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <div className='option2 text-2xl p-8' onClick={handleClick}>
                        <i className='fa fa-times' />
                    </div>
                    <li className="inline-block md:mr-5 lg:mr-10 mb-10 md:mb-0 text-[#3B6896]">Why Vant?</li>
                    <li className='inline-block md:mr-5 lg:mr-10 mb-10 md:mb-0 text-[#3B6896]'>FAQs</li>
                    <li className='inline-block md:mr-5 lg:mr-10 mb-10 md:mb-0 text-[#3B6896]'>About</li>
                    <li className='inline-block text-[#3B6896] hover:text-white hover:bg-[#3B6896] border border-[#3B6896] py-2 px-8 rounded-xl w-fit mx-auto'>
                        Download App
                    </li>
                </ul>
                <div className='option' >
                    <p className='text-[#3B6896] text-sm hover:text-white hover:bg-[#3B6896] border border-[#3B6896] py-2 px-4 rounded-xl w-fit mx-auto'>
                        Download App
                    </p>
                    <i className='fa fa-bars text-2xl' onClick={handleClick} />
                </div>
            </nav>
        </>
    )
}

export default Header