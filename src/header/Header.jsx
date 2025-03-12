import React, { useState } from 'react'
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
            <div className="contaner flex items-center mt-[24px] font-family max-xl:max-w-[1200px] max-lg:max-w-[900px] max-md:max-w-[80%] max-sm:justify-start">
            <a href='#'>
                <img className='w-[195px] max-xl:w-[180px] h-[24px] max-lg:w-[160px] max-md:hidden' src={logo} />
            </a>
            <div className="flex gap-[24px] text-[#666] text-[16px] font-normal items-center max-lg:gap-[19px] max-lg:text-[14px] max-md:text-[12px] max-sm:text-[10px] max-lg:ml-[0px] ml-[100px] max-sm:ml-0">
                <a href='#about' >{t('header_about')}</a>
                <a href='#faq'>{t('header_faq')}</a>
                <a href='#contact' >{t('header_contact')}</a>
                <a href='#service' >
                    {t("header_service")}
                </a>
                <div>
                    <div onClick={e => setIsActive(!isActive)} className='cursor-pointer px-[7px] py-[5px] rounded-[10px] w-[100px] text-center border-2 border-solid select-none border-[#0000007a] max-lg:px-5 max-sm:w-[60px] max-sm:px-3 '>
                        {lng}
                    </div>
                    {isActive && (
                        <div className=' mt-[10px] max-lg:mt-[5px] absolute cursor-pointer rounded-[10px] border-2 border-solid select-none border-[#0000007a] overflow-hidden' 
                            onClick={e => onChangeLang(e)}
                        >
                            <div  className="w-[100px] drop_item hover:bg-blue-600 hover:text-white cursor-pointer px-[7px] py-[5px] max-lg:px-5  max-sm:w-[60px] max-sm:px-3">
                                Uzbek 
                            </div>
                            <div  className="drop_item hover:bg-blue-600 hover:text-white cursor-pointer px-[7px] py-[5px] max-lg:px-4  max-sm:w-[60px] max-sm:px-3">
                                Русский
                            </div>
                    </div>
                    )}
                </div>

            </div>
            <a href='#contact'  className='rounded-[20px] w-[190px] h-[36px] bg-[#3360ff] flex items-center justify-center text-white font-medium text-base font-first max-lg:w-[150px] max-md:w-[100px] max-md:text-[10px] max-sm:w-[100px] max-sm:ml-2 max-sm:text-[6px] max-sm:h-[25px] max-sm:rounded-lg'>
                {t("header_button")}
            </a>
            </div>
        </div>
    </>
  )
}

export default Header