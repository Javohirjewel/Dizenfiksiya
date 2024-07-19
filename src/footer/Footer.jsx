import React from 'react'
import logo from '../assest/Frame 48097963.png'
import loc from '../assest/location.png'
import call from '../assest/phone-104 1.png'
import icon from '../assest/Vector 68.png'
import { motion } from "framer-motion";

const footer = () => {
    const textAnimation = {
        hidden: {
            x: -1000,
            opacity: 0,
            
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3},
              
        }
    }
  return (
    <motion.div initial ='hidden' whileInView='visible'  className='footer pb-[32px]'>
        <div className="contaner flex gap-[163px] justify-start ">
            <a href='#' className='cursor-pointer'>
                <img src={logo} alt="img" />
            </a>
            <motion.div variants={textAnimation} className="info  w-full ">
                <div className='flex gap-[16px] items-center'>
                    <p className='p-[10px] border-[1px] border-[#ccc] w-[40px] rounded-[8px]'>
                        <img src={loc} alt="image" />
                    </p>
                    <p className='flex gap-[16px] items-center font-second-family font-[500] text-[16px] text-[#242825]'>
                        Toshkent shahri  Yashnabod tumani  Mo’ljal Sergeli-4 bekat <span>
                            <img src={icon} alt="img" />
                        </span>
                    </p>
                </div>
                <div className='flex gap-[16px] items-center mt-[20px] pb-[32px] border-b-[1px] border-b-[#ccc] mb-[32px] w-full'>
                    <p className='p-[10px] border-[1px] border-[#ccc] w-[40px] rounded-[8px]'>
                        <img src={call} alt="image" />
                    </p>
                    <p className='flex gap-[16px] items-center font-second-family font-[500] text-[16px] text-[#242825]'>
                        +998 94 099 3434 
                        <span>
                            <img src={icon} alt="img" />
                    </span>
                </p>
                    
                </div>
                <div className="flex gap-[16px] flex-wrap">
                    <div className="card text-[#242825] w-[315px] py-[12px] bg-[#f2f2f2] rounded-[30px] font-first font-[500] text-[16px] flex justify-center gap-[16px] items-center cursor-pointer">
                        Facebook
                        <img className='w-[17px] h-[17px]' src={icon} alt="img" />
                    </div>
                    <div className="card text-[#242825] w-[315px] py-[12px] bg-[#f2f2f2] rounded-[30px] font-first font-[500] text-[16px] flex justify-center gap-[16px] items-center cursor-pointer">
                        Instagram
                        <img className='w-[17px] h-[17px]' src={icon} alt="img" />
                    </div>
                    <div className="card text-[#242825] w-[315px] py-[12px] bg-[#f2f2f2] rounded-[30px] font-first font-[500] text-[16px] flex justify-center gap-[16px] items-center cursor-pointer">
                        Telegram
                        <img className='w-[17px] h-[17px]' src={icon} alt="img" />
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default footer