import React from 'react'
import img from '../assest/trust.jpg'
import icon from '../assest/trust-icon.jpg'
import { delay, motion } from "framer-motion";

const trust = () => {
    const textAnimation = {
        hidden: {
            x: -800,
            opacity: 0,
        },
        visible: custom =>({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.2}
        })
    }
  return (
    <motion.div initial ='hidden' whileInView='visible'  className='trust contaner rounded-[16px] p-[32px] flex gap-[126px]'>
        <motion.div variants={textAnimation}>
            <img className='w-[528px] h-[510px] rounded-[12px]' src={img} alt="image" />
        </motion.div>
        <motion.div variants={textAnimation} custom={2}  className='w-[642px]'>
            <img className='w-[80px] h-[80px]' src={icon} alt="image" />
            <p className='mt-[12px] font-first font-[700]  text-[ #fafafa] text-[32px] leading-[150%] text-[#fafafa]'>
                Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina
            </p>
            <div className='rounded-[20px] w-[190px] h-[36px] bg-[#3360ff] flex items-center justify-center text-white font-medium text-base font-first mt-[136px]'>
                Bog'lanish
            </div>
        </motion.div>

    </motion.div>
  )
}

export default trust