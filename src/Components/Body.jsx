import React, { useEffect, useRef } from 'react'
import spiral from './../assets/spiral.png'
import google from './../assets/google.png'
import apple from './../assets/apple.png'
import one from './../assets/one.png'
import two from './../assets/two.png'
import three from './../assets/three.png'
import four from './../assets/four.png'
import five from './../assets/five.png'
import six from './../assets/six.png'
import mobile from './../assets/mobile.png'
import trust from './../assets/trust.png'
import ndic from './../assets/ndic.png'
import sec from './../assets/sec.png'
import safe from './../assets/safe.png'
import fintech from './../assets/fintech.png'
import eight from './../assets/eight.png'
import nine from './../assets/nine.png'
import ten from './../assets/ten.png'
import message from './../assets/message.png'
import './../animate.css'
import ScrollAnimation from 'react-animate-on-scroll'
import Typewriter from "typewriter-effect"
import Questions from './Questions'



function Body() {

    return (
        <div>
            <div className="w-10/12 m-auto md:flex items-center justify-between mt-5 mb-10 relative">
                <img src={spiral} alt="" className="absolute top-0 left-0 object-cover z-10" />
                <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    animateOut='animate__fadeOutBottomLeft'
                    duration={2}
                >
                    <div className="md:flex-col hidden md:flex">
                        <img src={one} id="menu-icon" alt="" />
                        <img src={two} alt="" />
                        <img src={three} alt="" />
                    </div>
                </ScrollAnimation>
                <div className="flex-col lg:w-3/4 w-full lg:-mt-20 mt-7">
                    <h3 className="lg:text-7xl md:text-5xl text-4xl font-extrabold text-center">
                        Unleash your <span className="text-[#3B6896]">Saving</span> Potentials
                    </h3>
                    <div className="lg:flex justify-center text-center lg:py-7 py-3 md:text-2xl text-base font-semibold">
                        <p>Start with Vant to&nbsp;</p>
                        <div className="text-[#5D9E75]">
                            <Typewriter
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Save to Payoff debt")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("Save to escape Sapa")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .typeString("Save to escape Balablu")
                                        .start();
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex ustify-between justify-evenly md:w-4/5 w-full m-auto mt-2 lg:mt-0">
                        <img src={google} className="lg:w-fit md:w-36 w-24" alt="" />
                        <img src={apple} className="lg:w-fit md:w-36 w-24" alt="" />
                    </div>
                </div>
                <ScrollAnimation
                    animateIn="animate__fadeInRight"
                    animateOut='animate__fadeOutBottomRight'
                    duration={2}
                >
                    <div className="md:flex-col hidden md:flex">
                        <img src={six} alt="" />
                        <img src={five} className="my-10" alt="" />
                        <img src={four} alt="" />
                    </div>
                </ScrollAnimation>
            </div>
            <ScrollAnimation
                animateIn="animate__fadeInUp"
                duration={2}
            >
                <img src={mobile} className="w-10/12 m-auto" alt="" />
            </ScrollAnimation>
            <div className="bg-gradient-to-r from-[#5d9e75] from-70% to-[#a3d19b] relative">
                <img src={spiral} alt="" className="absolute top-0 left-0 object-cover w-full lg:h-full h-[150vh]" />
                <div className="lg:py-16 md:py-10 py-5 w-10/12 m-auto text-white">
                    <h3 className="font-bold text-center md:text-3xl text-2xl lg:mb-10 md:mb-8 mb-5">
                        Your Vant account is
                    </h3>
                    <div className="md:flex justify-between">
                        <div className="flex md:w-[30%] mb-10 md:mb-0">
                            <div className="mr-3 w-10">
                                <img src={trust} alt="" />
                            </div>
                            <div className="flex-col">
                                <h5 className="font-bold text-2xl">Insured</h5>
                                <p className="my-2">Deposits on our platform are NDIC insured</p>
                                <img src={ndic} alt="" />
                            </div>
                        </div>
                        <div className="flex md:w-[33%] mb-10 md:mb-0">
                            <div className="mr-3 w-16">
                                <img src={sec} alt="" />
                            </div>
                            <div className="flex-col">
                                <h5 className="font-bold text-2xl">Regulated</h5>
                                <p className="my-2">Vant is regulated by the NCSC - Nigerian Co-operative Societies Act</p>
                                {/* <img src={ndic} alt="" /> */}
                            </div>
                        </div>
                        <div className="flex md:w-[32%] mb-10 md:mb-0">
                            <div className="mr-3 w-14">
                                <img src={safe} alt="" />
                            </div>
                            <div className="flex-col">
                                <h5 className="font-bold text-2xl">Recognized</h5>
                                <p className="my-2">Vant is recognized member of FinTech Association of Nigeria</p>
                                <img src={fintech} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F5F5F5]">
                <div className="w-10/12 m-auto font-extrabold mb:text-4xl text-3xl lg:pt-20 md:pt-10 pt-7 mb-10">
                    All-in-one <br /> Savings solutions
                </div>
                <div className="md:flex md:flex-wrap w-10/12 m-auto pb-20 justify-between">
                    <div className="p-5 lg:w-[30%] md:w-[49%] bg-white rounded-xl">
                        <h3 className="font-bold text-2xl">Save towards your Personal Goals</h3>
                        <img src={nine} alt="" />
                        <p>Keep money aside by setting specific goals over a period of time with a set deposit interval with vant.</p>
                    </div>
                    <div className="p-5 lg:w-[30%] md:w-[49%] bg-white rounded-xl my-5 md:my-0">
                        <h3 className="font-bold text-2xl">Save to Pay-off Debt</h3>
                        <img src={ten} className="md:my-14 lg:my-10 my-5" alt="" />
                        <p>Create a savings to pay money you owe and have it sent automatically sent to whoever you owe with vant.</p>
                    </div>
                    <div className="p-5 lg:w-[30%] md:w-[45%] md:mx-auto lg:mx-0 md:mt-5 lg:mt-0     bg-white rounded-xl">
                        <h3 className="font-bold text-2xl">Save to Buy what you want</h3>
                        <img src={eight} className="lg:my-12 my-5" alt="" />
                        <p>Save convenient sums towards buying that gadget, fashion wears you’ve always wanted with vant.</p>
                    </div>
                </div>
            </div>
            <div className='w-9/12 m-auto lg:text-xl lg:pb-60 pb-52'>
                <div className="text-center font-extrabold lg:text-5xl text-3xl lg:pt-16 pt-10 lg:pb-5 pb-2">
                    FAQs
                </div>
                <Questions
                    question="What is Vant?"
                    answer="Vant is a savings and financial management app for individual and small businesses."
                />
                <Questions
                    question="How does Vant work?"
                    answer="Vant allows you to save individual or in groups into different savings pocket. With Vant you get to also enjoy different financial management value added services."
                />
                <Questions
                    question="Is my personal and financial information safe with Vant?"
                    answer="At Vant your data privacy 🔏 is important to us. We protect your data bank-level encryption. Your is not shared with 3rd party service providers your permission."
                />
                <Questions
                    question="How does Vant help me save money?"
                    answer="With Vant you get you save into your savings pocket through card or bank transfer. You are in control, you can save in fixed deposits and initiate automatic funding of your savings pockets."
                />
                <Questions
                    question="Can I set specific savings goals with Vant?"
                    answer="Yes, you can setup various savings goals with Vant when setting up your savings pocket. You even get to see your progress and see if you are meeting with your timeline..."
                />
            </div>
            <div className="bg-black h-[250px] text-white relative">
                <div className="md:flex justify-between items-center bg-[#3B6896] w-10/12 rounded-3xl m-auto lg:px-16 md:px-10 px-5 lg:py-20 md:py-10 py-7 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[270px] md:-translate-y-[230px] lg:-translate-y-[250px]">
                    <div className='flex items-start md:w-1/2'>
                        <img src={message} alt="" />
                        <div className='ml-5'>
                            <div className="font-extrabold lg:text-3xl text-xl lg:mb-4 mb-1">
                                Keep up with Vant latest
                            </div>
                            <p>
                                Subscribe to our newsletter to get the latest updates on Vant
                            </p>
                        </div>
                    </div>
                    <div className="md:w-[45%] mt-5 lg:mt-0">
                        <p>Subscribe to our newsletter</p>
                        <form action='/' className="lg:flex lg:mt-5 mt-2">
                            <input type="email" placeholder='Enter your email' className='lg:w-72 w-full bg-[#5a7fa5] px-3 py-2 text-white rounded-lg outline-none' />
                            <input type='submit' value='Subscribe' className='bg-[#5D9E75] lg:px-7 px-5 lg:py-3 py-2 lg:ml-5 rounded-lg cursor-pointer mt-3 lg:mt-0' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body