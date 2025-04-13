import React from 'react'
import Buttons from '../buttons/Buttons'

const Nav = () => {
  return (
    <>
        <nav className='w-[100%] flex items-center justify-between pl-[100px] pr-[126px] mt-[20px]'>
            <div>
                <h2 className='font-bold text-[#113C49] text-[32px] '>Skilline</h2>
            </div>
           <div className='flex gap-[80px] items-center'>
           <ul className='flex gap-[80px] text-[#252641] text-[22px] font-[Poppins]'>
                <li>Home</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Us</li>
            </ul>
            <div className='flex gap-[34px]'>
                <Buttons className={`bg-white text-[22px] rounded-[80px] text-[#6C6C6C]`} Text={"Login"}/>
                <Buttons className={`bg-[#F48C06] text-[22px] rounded-[80px] text-white`} Text={"Sigin Up"}/>
            </div>
           </div>
        </nav>
    </>
  )
}

export default Nav
