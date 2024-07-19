import React, { useState } from 'react'
import faq from '../assest/icon-faq.jpg'
import { motion } from "framer-motion";

const faqss = () => {    
    const [isActive, setIsActive] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)

    const contactAnimation = {
        hidden: {
            y: 10,
            transition: { duration: 10},
        },
        visible: {
            y: 0,
            opacity: 1,
              
        }
    }
  return (
    <motion.div   initial ='hidden' whileInView='visible'  className='contaner mt-[146px] flex border-t-[1px] border-t-[#ccc]'>
        <div className='font-first font-[700] text-[48px] text-[#020c31] pt-[32px]'>
            FAQ
        </div>
        <div className='font-first text-[24px] text-[#676d83] font-[500] w-[80%] '>
            <div  className='border-b-[#ccc] border-b-[1px]  pb-[30px] '>
            <p onClick={e => {
                setIsActive(!isActive)
                setIsActive2(false)
                setIsActive3(false)

            }} 
            className='flex cursor-pointer pb-[20px] pt-[28px] justify-between items-center'>
                Zararkunandalarni yoʼq qilish qanday amalga oshiriladi?
                <img className='w-[52px] h-[52px]' src={faq} alt="img"/>
            </p>
            {
                isActive && 
                <motion.p variants={contactAnimation}>
                    Maxsus asbob-uskunalar yordamida insektitsidlar aerozolli tumanga aylanadi va devor qogʼozi, devorlar va taxta plitalari orasidagi yeng kichik boʼshliqlarga, koʼzga koʼrinmas hasharotlar uchun potentsial yashirish joylariga kiradi.
                </motion.p>
            }
            </div>
            <div className='border-b-[#ccc] border-b-[1px]  pb-[30px] '>
                <p onClick={e => {
                    setIsActive2(!isActive2)
                    setIsActive(false)
                    setIsActive3(false)
                }
                } 
                className='flex cursor-pointer pb-[30px] pt-[26px] justify-between items-center'>
                    Siz foydalanadigan dorilar xavflimi?
                    <img className='w-[52px] h-[52px]' src={faq} alt="img"/>
                </p>
                {
                    isActive2 && 
                    <p>
                        Preparatlar odamlar, uy hayvonlari va oʼsimliklar uchun xavfli yemas. Аmmo davolanishdan keyin xonani 40 daqiqa davomida ventilyatsiya qilish kerak.
                    </p>
                }
            </div>
            <div className='border-b-[#ccc] border-b-[1px]  pb-[30px] '>
                <p onClick={e => {
                    setIsActive3(!isActive3)
                    setIsActive(false)
                    setIsActive2(false)
                }
                } className='flex cursor-pointer pt-[26px] justify-between items-center'>
                    Menga uyimni davolanishga tayyorlashning qandaydir usuli kerakmi?
                    <img className='w-[52px] h-[52px]' src={faq} alt="img"/>
                </p>
                {
                    isActive3 && 
                    <p className='pt-[20px]'>
                        Аsosan, idish-tovoq va shaxsiy gigiena vositalarini izolyatsiya qilishingiz kerak. Davolash paytida uy hayvonlari ham izolyatsiya qilinishi kerak. Mebel yoki maishiy texnikani koʼchirishga hojat yoʼq.
                    </p>
                }
            </div>
        </div>
    </motion.div>
  )
}
export default faqss