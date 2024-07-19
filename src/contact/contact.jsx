import React, { useState } from 'react'
import person from '../assest/perso.png'
import { motion } from "framer-motion";
import axios from 'axios';


const contact = () => {
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
    const contactAnimation = {
        hidden: {
            y: 200,
            opacity: 0,
            
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3},
              
        }
    }
    const [check, setCheck] = useState(false)
    const sendMessage = (event) =>{
        event.preventDefault();
        const token = "7120661802:AAHlazC5s8a7_vBHLUvbgyQzU7bW-RLc4vI";
        const chatId = "1062267195";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const phone =   '+' + document.getElementById('phone').value
        const messageContent = `Ismi: ${name} \n Telefon raqami:  ${phone}`
        axios({
            url: url,
            method: "POST",
            data:{
                "chat_id": chatId,
                "text": messageContent
            }
        }).then((res) => { 
            document.getElementById('myForm').reset()
            alert('Muvoffaqiyatli yuborildi')
        }).catch((error) => 
            alert("xatolik"))
    }

  return (
    <motion.div variants={contactAnimation}  initial ='hidden' whileInView='visible' id='contact'  className='contact big-contaner p-[32px] flex gap-[198px] relative mb-[29px] mt-[80px]'>
        <motion.form id='myForm' onSubmit={sendMessage} variants={textAnimation} className="inp bg-white rounded-[8px] w-[456px] px-[24px] pt-[28px] pb-[32px]">
            <p className='font-first font-[700] text-[32px] leading-[125%] text-[#242825]'>
                Malumotingizni qoldiring
            </p>
            <input id='name'  required type="text" className='mt-[36px] rounded-[8px] text-[#242825] bg-[#f2f2f2] w-full px-[20px] py-[12px] font-second-family text-[16px] font-[500] placeholder:text-[#808080] outline-none' placeholder='Ism'/>
            <div className='mt-[28px] rounded-[8px] bg-[#f2f2f2] w-full px-[20px] flex items-center gap-[5px] text-[#393e3a]'>
                <p>
                    +
                </p>
              <input id='phone' required type="number" className=' bg-transparent py-[12px] font-second-family text-[16px] font-[500] placeholder:text-[#808080] outline-none w-full' placeholder='998 90 125 45 65'/>
            </div>
            <div className='flex gap-[8px] font-second-family text-[14px] text-[#89958c] font-[400] mt-[14px]'>
                <input onClick={(e) => setCheck(!check)} checked={check} className='w-[16px] rounded-[4px]' type="checkbox" />
                <p className='cursor-pointer select-none' onClick={e => {
                    setCheck(!check)
                }}>
                    Maxfiylik siyosati
                </p>
            </div>
            <button type='submit' className='block w-[200px] bg-[#242825] py-[12px] text-center rounded-[8px] font-first font-[500] text-[16px] text-white mt-[14px] cursor-pointer'>
                Yozilish
            </button>
        </motion.form>
        <div className='w-[338px] font-first font-[500] text-[20px] leading-[120%] mt-[28px] text-[#fafafa]'>
            Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina
        </div>
        <img src={person} alt="image" className='w-[461px] absolute bottom-0 right-0' />
    </motion.div>
  )
}

export default contact