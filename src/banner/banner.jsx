import React from 'react'
import small from "../assest/banner__little.png"
import big from "../assest/banner__big.jpg"
import log from '../assest/photo_2024-07-14_09-41-01.jpg'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


const banner = () => {
    const textAnimation = {
        hidden: {
            x: -800,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    const {t} = useTranslation()
  return (
    <>
        <motion.div  
        initial ='hidden'
        whileInView='visible' className="contaner mt-[152px] mb-[120px] flex justify-between gap-[60px]">
            <div className="info w-[625px] leading-[60px] ">
                <motion.p variants={textAnimation} className='text-[#3375ff] text-[64px] font-black'>
                    {t("banner_info")}
                </motion.p>
                <div className='flex'>
                    <motion.p variants={textAnimation} className='w-[301px] text-[16px] font-second-family text-[#676d83] leading-6 pt-[32px]'>
                        {t("banner_content")}
                    </motion.p>
                    <img className='w-[308px] h-[240px] mt-[-50px]'  src={small} alt="image"/>
                </div>
                <div  className='flex gap-[4px] mt-[185px] items-center cursor-pointer'>
                    <a  href='#contact'  className='rounded-[47px] text-[16px]  w-[217px] h-[36px] bg-[#3360ff] flex items-center justify-center text-white font-medium text-base font-first' >
                        {t("header_button")}
                        
                    </a>
                    <div className='border-[1px] flex justify-center items-center rounded-[62px] w-[64px]  h-[48px] border-solid border-[#ccc]'>
                         <img  className='w-[24px] h-[24px]' src={log} alt="image" />
                    </div>
                </div>
            </div>
            
            <div>
                <img className='w-[674px] h-[540px]' src={big} alt="image" />
            </div>
        </motion.div>
    </>
  )
}

export default banner