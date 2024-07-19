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
        <motion.div initial ='hidden'
        whileInView='visible' className="contaner">
            <div className="title font-[700] text-[#020c31] text-[40px] border-b-solid border-b-[#ccc] border-b-[1px] pb-[32px] mb-[32px] font-first">
                {t("advantage_title")}
            </div>
            <div className="flex justify-between">
                <motion.div variants={textAnimation}>
                    <img className='w-[70px] h-[56px]' src={img1} alt="img" />
                    <p className='font-first font-[900] text-[24px] text-[#020c31] mt-[20px]'>
                        {t("advantage_card1_title")}
                    </p>
                    <p className='font-second-family text-[#676d83] text-[16px] font-[400] mt-[8px] w-[301px]'>
                        {t("adventage_card1_content")}
                    </p>
                </motion.div>
                <motion.div variants={textAnimation}>
                    <img className='w-[70px] h-[56px]' src={img2} alt="img" />
                    <p className='font-first font-[900] text-[24px] text-[#020c31] mt-[20px]'>
                        {t("adventage_card2_title")}
                    </p>
                    <p className='font-second-family text-[#676d83] text-[16px] font-[400] mt-[8px] w-[301px]'>
                        {t("adventage_card2_content")}
                    </p>
                </motion.div>
                <motion.div variants={textAnimation}>
                    <img className='w-[70px] h-[56px]' src={img3} alt="img" />
                    <p className='font-first font-[900] text-[24px] text-[#020c31] mt-[20px] capitalize'>
                        {t("adventage_card3_title")}
                    </p>
                    <p className='font-second-family  text-[#676d83] text-[16px] font-[400] mt-[8px]  w-[301px]'>
                        {t("adventage_card3_content")}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    </>
  )
}

export default adventage