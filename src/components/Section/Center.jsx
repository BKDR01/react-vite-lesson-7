import React from 'react'
import LogoBrands from './../../assets/img/Group 16.png';
import info1 from './../../assets/img/Group 22.png';
import info2 from './../../assets/img/Group 23.png';
import Buttons from '../Cnopka/Buttons';
import SectionProps from '../SectionProps/SectionProps';
import img1 from './../../assets/img/Group 17.png';

const Center = () => {
  return (
    <>
    <section className='mt-[100px]'>
        <h2 className='text-[#696984] text-[28px] font-[Poppins] text-center mb-[32px]'>Trusted by 5,000+ Companies Worldwide</h2>
        <img src={LogoBrands} className='mx-auto mb-[100px]' alt="" />

        <div>
            <h2 className='text-[44px] font-[Poppins] text-center font-bold text-[#2F327D] mb-[34px]'>What is <span className='text-[#F48C06]'>Skilline?</span></h2>
            <p className='text-[#696984] text-[24px] font-[Poppins] text-center mb-[80px]'>Skilline is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br /> due dates; grade results and provide students with feedback all in one place.</p>
            <div className='flex justify-center items-center gap-[100px] '>
                <div className='group bg-cover bg-center flex justify-center items-center w-[600px] h-[400px] ' style={{ backgroundImage: `url(${info1})` }}>
                    <div>
                        <h2 className='text-[32px] font-[Poppins] text-white mb-[17px]'>FOR INSTRUCTORS</h2>    
                        <Buttons className={`group-hover:bg-[#23BDEEE5] group-hover:outline-0 outline outline-white transition duration-300 rounded-[80px] text-white text-[22px]`} Text={'Start a class today'}/>
                    </div>                    
                </div>
                <div className='group bg-cover bg-center flex justify-center items-center w-[600px] h-[400px] ' style={{ backgroundImage: `url(${info2})` }}>
                      <div>
                        <h2 className='text-[32px] font-[Poppins] text-white mb-[17px]'>FOR INSTRUCTORS</h2>    
                        <Buttons className={`group-hover:bg-[#23BDEEE5] group-hover:outline-0 outline outline-white transition duration-300 rounded-[80px] text-white text-[22px]`} Text={'Enter access code'}/>
                    </div>   
                </div>
            </div>
            <div className='flex justify-center mt-[140px]'>

            <div className={`flex items-center mb-16`}>
             <div className="flex items-center gap-[67px]">
             <div>
             <h3 className="text-[#2F327D] font-semibold font-[Poppins] text-[36px] mb-2">Everything you can do in a physical <br /> classroom, <span className='text-[#F48C06]'>you can do with Skilline</span></h3>
             <p className="text-[24px] text-[#696984]">Skilline’s school management software helps traditional <br /> and online schools manage scheduling, attendance, <br /> payments and virtual classrooms all in one secure <br /> cloud-based system.</p>
             <br />
             <p className="text-[22px] text-[#696984]">Learn more</p>
             </div>
             <img
             src={img1}
              alt=''
             className="w-[705px] h-[471px] rounded-xl"
             />
             </div>
         </div>

            </div>
        </div>
        <SectionProps />
    </section>
    </>
  )
}

export default Center
