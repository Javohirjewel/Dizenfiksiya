import React from 'react'
import img1 from '../assest/servise1.jpg'
import img2 from '../assest/servise2.jpg'
import img3 from '../assest/servise3.jpg'
import { delay, motion } from "framer-motion";

const servise = () => {
    const textAnimation = {
        hidden: {
            x: -800,
            opacity: 0,
        },
        visible: curstom =>({
            x: 0,
            opacity: 1,
            transition: { delay: curstom * 0.2}
        }),
    }
  return (
    <motion.div id='service' initial ='hidden'
    whileInView='visible'  className='contaner mb-[120px] overflow-hidden'>
        <div className="title font-[700] text-[#020c31] text-[52px] border-b-solid font-first mt-[120px] max-xl:text-[35px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[20px]">
            Service
        </div>
        <p className='text-[18px] font-[400] text-[#666] font-second-family mt-4'>
            Bu darsliklari sizning yuqori daraja <br /> olishingizga yordam beradi
        </p>
        <div className="mt-[48px] flex justify-between gap-[16px]">
            <motion.div variants={textAnimation} custom={1}  className="relative  w-[443px] h-[500px] max-xl:w-[30%] max-xl:h-[470px] max-md:h-[400px] max-sm:h-[350px] bg-[#f3f6f6] pt-[48px] px-[32px] font-first">
                <p className=' font-[700] text-[32px] text-[#020c31] h-[90px] max-lg:text-[22px] max-md:text-[18px] max-sm:text-[12px]'>
                    Boshlang’ich tushunchalar
                </p>
                <p className='font-[500] text-[#056ac7] capitalize text-[16px] mt-[20px]'>
                    nazariy bilimlar  <br />
                    <span className='lowercase font-[400]'>
                        16 dars
                    </span>
                </p>
                <img className='w-[80px] h-[80px] absolute bottom-[40px] right-[40px] max-md:w-[60px] max-md:h-[60px]' src={img1} alt="img" />
            </motion.div>
            <motion.div variants={textAnimation} custom={2} className="relative  w-[443px] h-[500px] max-xl:w-[30%] max-xl:h-[470px] max-md:h-[400px] max-sm:h-[350px] bg-[#f3f6f6] pt-[48px] px-[32px] font-first">
                <p className=' font-[700] text-[32px] text-[#020c31]  h-[90px] max-lg:text-[22px]'>
                    O’rta
                </p>
                <p className='font-[500] text-[#056ac7] capitalize text-[16px] mt-[20px]'>
                    nazariy va Amaliy bilimlar  <br />
                    <span className='lowercase font-[400]'>
                        23 dars
                    </span>
                </p>
                <img className='w-[80px] h-[80px] absolute bottom-[40px] right-[40px] max-md:w-[60px] max-md:h-[60px]' src={img2} alt="img" />
            </motion.div>
            <motion.div variants={textAnimation} custom={3} className="relative  w-[443px] h-[500px] max-xl:w-[30%] max-xl:h-[470px] max-md:h-[400px] max-sm:h-[350px] bg-[#f3f6f6] pt-[48px] px-[32px] font-first">
                <p className=' font-[700] text-[32px] text-[#020c31]  h-[90px] max-lg:text-[22px]'>
                    Yuqori
                </p>
                <p className='font-[500] text-[#056ac7] capitalize text-[16px] mt-[20px]'>
                    Amaliy bilimlar  <br />
                    <span className='lowercase font-[400]'>
                        16 dars
                    </span>
                </p>
                <img className='w-[80px] h-[80px] absolute bottom-[40px] right-[40px] max-md:w-[60px] max-md:h-[60px]' src={img3} alt="img" />
            </motion.div>
        </div>
    </motion.div>
  )
}

export default servise