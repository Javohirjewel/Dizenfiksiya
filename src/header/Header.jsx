import React, { useState } from 'react'
import { motion } from "framer-motion";
import logo from '../assest/Frame 48097963.png'
import i18n from  '../i18n'
import { useTranslation } from 'react-i18next';

function Header() {
    const [isActive, setIsActive] = useState(false)
    const [lng, seetlng] = useState('Uzbek')

    const {t} = useTranslation()

    const onChangeLang = (e) => {
        let lngs = e.target.textContent
        seetlng(lngs)
        if(lngs === "Uzbek"){
            i18n.changeLanguage("uz")
        }else{
            i18n.changeLanguage("ru")
        }
        setIsActive(false)
    }

  return (
    <>
        <div className='header'>
            <div className="contaner flex items-center  mt-[24px] font-family">
            <a href='#'>
                <img className='w-[195px] h-[24px]' src={logo} />
            </a>
            <div className="flex gap-[24px] text-[#666] text-[16px] font-normal items-center ml-[100px]">
                <a href='#about' >{t('header_about')}</a>
                <a href='#faq'>{t('header_faq')}</a>
                <a href='#contact' >{t('header_contact')}</a>
                <a href='#service' >
                    {t("header_service")}
                </a>
              
                <div>
                    <div onClick={e => setIsActive(!isActive)} className='cursor-pointer px-[7px] py-[5px] rounded-[10px] w-[100px] text-center border-2 border-solid select-none border-[#0000007a]'>
                        {lng}
                    </div>
                    {isActive && (
                        <div className=' mt-[10px] absolute cursor-pointer rounded-[10px] border-2 border-solid select-none border-[#0000007a] overflow-hidden' 
                            onClick={e => onChangeLang(e)}
                        >
                            <div  className="w-[100px] drop_item hover:bg-blue-600 hover:text-white cursor-pointer px-[7px] py-[5px] ">
                                Uzbek 
                            </div>
                            <div  className="drop_item hover:bg-blue-600 hover:text-white cursor-pointer px-[7px] py-[5px] ">
                                Русский
                            </div>
                    </div>
                    )}
                </div>

            </div>
            <a href='#contact'  className='rounded-[20px] w-[190px] h-[36px] bg-[#3360ff] flex items-center justify-center text-white font-medium text-base font-first'>
                {t("header_button")}
            </a>
            </div>
        </div>
    </>
  )
}

export default Header