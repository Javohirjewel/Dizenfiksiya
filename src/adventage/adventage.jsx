import React from 'react'
import img1 from '../assest/card1.jpg'
import img2 from '../assest/cards2.jpg'
import img3 from '../assest/card3.jpg'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


const adventage = () => {
    const textAnimation = {
        hidden: {
            x: -1200,
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
        <motion.div initial ='hidden' id='about'
        whileInView='visible' className="contaner max-xl:w-[90%] max-md:mt-0">
            <div className="title font-[700] text-[#020c31] text-[40px] border-b-solid border-b-[#ccc] border-b-[1px] pb-[32px] mb-[32px] w-full font-first max-xl:text-[35px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[20px]">
                {t("advantage_title")}
            </div>
            <div className="flex justify-between gap-[50px] px-3">
                <motion.div variants={textAnimation} className='max-lg:w-[30%] max-md:w-[25%]'>
                    <img className='w-[70px] h-[56px] max-lg:w-[60px] max-lg:h-[52px] max-md:w-[50px] max-md:h-[44px]' src={img1} alt="img" />
                    <p className='font-first font-[900] text-[24px] text-[#020c31] mt-[20px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[15px] max-sm:text-[11px]'>
                        {t("advantage_card1_title")}
                    </p>
                    <p className='font-second-family text-[#676d83] text-[16px] font-[400] mt-[8px] max-xl:text-[15px] max-lg:text-[12px] max-sm:text-[8px]'>
                        {t("adventage_card1_content")}
                    </p>
                </motion.div>
                <motion.div variants={textAnimation} className='max-lg:w-[30%] max-md:w-[25%]'>
                    <img className='w-[70px] h-[56px] max-lg:w-[60px] max-lg:h-[52px] max-md:w-[50px] max-md:h-[44px]' src={img2} alt="img" />
                    <p className='font-first font-[900] text-[24px] text-[#020c31] mt-[20px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[15px] max-sm:text-[10px]'>
                        {t("adventage_card2_title")}
                    </p>
                    <p className='font-second-family text-[#676d83] text-[16px] font-[400] mt-[8px] max-xl:text-[15px] max-lg:text-[12px] max-sm:text-[8px]'>
                        {t("adventage_card2_content")}
                    </p>
                </motion.div>
                <motion.div variants={textAnimation} className='max-lg:w-[30%] max-md:w-[25%]'>
                    <img className='w-[70px] h-[56px] max-lg:w-[60px] max-lg:h-[52px] max-md:w-[50px] max-md:h-[44px]' src={img3} alt="img" />
                    <p className='font-first font-[900] text-[24px] text-[#020c31] mt-[20px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[10px] max-sm:text-[11px]'>
                        {t("adventage_card3_title")}
                    </p>
                    <p className='font-second-family text-[#676d83] text-[16px] font-[400] mt-[8px] max-xl:text-[15px] max-lg:text-[12px] max-sm:text-[8px]'>
                        {t("adventage_card3_content")}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    </>
  )
}

export default adventage