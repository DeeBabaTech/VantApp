import React from 'react'
import logo from './../assets/log.png'
import apple from './../assets/apple.png'
import google from './../assets/google.png'
import twitter from './../assets/twitter.png'
import linkedin from './../assets/Linkedin.png'
import instagram from './../assets/Instagram.png'

function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="md:flex flex-1 items-center justify-between w-10/12 m-auto text-white">
                <img src={logo} className="lg:w-44 w-32 mx-auto md:mx-0" alt="" />
                <div className='md:flex items-center' >
                    <div className="mt-5 md:mt-0 text-center font-bold lg:font-normal">Your journey with Vant starts here</div>
                    <img src={google} className="lg:w-44 w-32 md:mx-5 mx-auto my-5 lg:my-0" alt="" />
                    <img src={apple} className="lg:w-44 w-32 mx-auto" alt="" />
                </div>
            </div>
            <div className="w-10/12 h-[0.1rem] bg-[#2F2F2F] m-auto lg:my-20 my-10" />
            <div className="flex flex-wrap w-10/12 m-auto md:justify-between">
                <div className='w-1/2 md:w-fit mb-10 md:mb-0'>
                    <div className="font-bold">Product</div>
                    <p className='my-2 lg:my-5'>Vant android</p>
                    <p>Vant iOS</p>
                </div>
                <div className='w-1/2 md:w-fit'>
                    <div className="font-bold">Company</div>
                    <p className='lg:my-5 my-2'>Why Vant?</p>
                    <p>About Us</p>
                </div>
                <div className='w-1/2 md:w-fit'>
                    <div className="font-bold">Legal</div>
                    <p className='lg:my-5 my-2'>Terms of Service</p>
                    <p>Private Policy</p>
                </div>
                <div className='w-1/2 md:w-fit'>
                    <div className="font-bold lg:mb-5 mb-2">Social</div>
                    <div className='flex'>
                        <a href="https://twitter.com/vantappafrica">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/showcase/vant-saving-app/">
                            <img src={linkedin} className='lg:mx-5 mx-2' alt="" />
                        </a>
                        <a href="https://www.instagram.com/vantappafrica/ ">
                            <img src={instagram} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-10/12 h-[0.1rem] bg-[#2F2F2F] m-auto lg:mt-20 mt-10 mb-5" />
            <div className="w-10/12 m-auto lg:pb-20 pb-10 text-sm lg:text-base">
                <span> &copy; </span> 2023 Advant Capitol, All rights reserved.
            </div>
        </footer>
    )
}

export default Footer