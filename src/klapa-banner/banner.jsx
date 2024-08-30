import React from 'react'
import { motion } from "framer-motion";


const banner = () => {
    const textAnimation = {
        hidden: {
            x: 1200,
            opacity: 0,
            
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }    
return (
    <motion.div id='faq'
    initial ='hidden' whileInView='visible' 
    className='klapa__banner mt-[96px] overflow-hidden'>
        <div className="contaner flex justify-end">
            <div className='w-[558px] pt-[60px] pb-[120px]'>
                <motion.p variants={textAnimation}  className='w-[558px] text-[#fafafa] font-first text-[40px] leading-[120%] font-[700]'>
                    Klapa va zararli hashorot endi yo’q deb hisoblang !!!
                </motion.p>
                <motion.p variants={textAnimation}  className='w-[309px] font-second-family mt-[20px] text-white text-[16px] font-[400] leading-[150%]'>
                    Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun
                </motion.p>
                <a  href='#contact' className='rounded-[47px] text-[16px]  w-[217px] h-[36px] bg-[#3360ff] flex items-center justify-center text-white font-medium text-base font-first mt-[136px]' >
                    Bog'lanish
                </a>
            </div>
        </div>
    </motion.div>
  )
}

export default banner