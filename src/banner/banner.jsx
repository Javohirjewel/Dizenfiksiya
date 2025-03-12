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
        whileInView='visible' className="contaner mt-[152px] mb-[120px] max-lg:mb-8 flex justify-between gap-[60px] max-xl:mt-[110px] max-xl:w-[90%] max-sm:block max-sm:mt-2 max-sm:w-[80%] max-sm:relative">
            <div className="info w-[625px] leading-[60px] max-md:w-[90%] ">
                <motion.p variants={textAnimation} className='text-[#3375ff] text-[64px] font-black max-lg:text-[55px] max-md:text-[45px] max-sm:text-[30px]'>
                    {t("banner_info")}
                </motion.p>
                <div className='flex max-sm:w-[90%]'>
                    <motion.p variants={textAnimation} className='w-[301px] text-[16px] font-second-family text-[#676d83] leading-6 pt-[32px] max-md:text-[15px]'>
                        {t("banner_content")}
                    </motion.p>
                    <img className='w-[308px] h-[240px] mt-[-50px] max-md:w-[240px] max-md:h-[200px] max-sm:w-[120px] max-sm:h-[100px] max-sm:absolute max-sm:right-0 max-sm:bottom-[650px] max-sm:z-50' src={small} alt="image"/>
                </div>
                <div  className='flex gap-[4px] mt-[185px] items-center cursor-pointer max-sm:mt-[50px] max-sm:mb-[20px]'>
                    <a  href='#contact'  className='rounded-[47px] text-[16px]  w-[217px] h-[36px] bg-[#3360ff] flex items-center justify-center text-white font-medium text-base font-first max-md:w-[180px]'>
                        {t("header_button")}
                        
                    </a>
                    <div className='border-[1px] flex justify-center items-center rounded-[62px] w-[64px]  h-[48px] border-solid border-[#ccc]'>
                         <img  className='w-[24px] h-[24px] max-md:w-[18px]' src={log} alt="image" />
                    </div>
                </div>
            </div>
            
            <div>
                <img className='w-[674px] h-[540px] max-md:w-[574px] max-md:h-[440px] max-sm:w-[450px] max-sm:h-[320px]' src={big} alt="image" />
            </div>
        </motion.div>
    </>
  )
}

export default banner