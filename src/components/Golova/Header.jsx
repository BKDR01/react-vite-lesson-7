import React from 'react'
import Nav from '../Nav/Nav'
import Buttons from '../Cnopka/Buttons'
import gril from './../../assets/img/header-pic.png';
import { FaPlay } from "react-icons/fa";

const Bosh = () => {
  return (
    <>
      <header className='h-[1082px] bg-[#FFF3E4]'>
        <br />
        <nav className='mb-[81px]'>
            <Nav />
        </nav>

        <div className='flex items-center pl-[100px] h-[800px] gap-[103px]'>
            <div>
                <h2 className='text-[54px] font-[Poppins] font-bold text-[#2F327D] mb-[34px]'><span className='text-[#F48C06]'>Studying</span> Online is now <br /> much easier</h2>
                <p className='text-[#464646] text-[24px] font-[Nunito Sans] mb-[52px]'>Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>
                <div className='flex gap-[40px]'>
                    <Buttons className={'rounded-[80px] bg-[#F48C06] text-white text-[24px] font-[Poppins] font-semibold'} Text={'Join for free'}/>
                    <div className='flex gap-[32px] items-center'>
                        <div className='text-[#23BDEE] w-[80px] h-[80px] bg-white rounded-[50%] text-[24px] flex justify-center items-center'><FaPlay /></div>
                        <p className='text-[#252641] font-[Poppins] text-[24px]'>Watch how it works</p>
                    </div>
                </div>
            </div>
            <img src={gril} alt="" />
        </div>

      </header>
    </>
  )
}

export default Bosh
