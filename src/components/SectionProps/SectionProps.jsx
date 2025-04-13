import React from 'react';
import Img3 from './../../assets/img/Group 124.png';
import Img4 from './../../assets/img/Group 106.png';
import Img2 from './../../assets/img/Group 92.png';
import Img1 from './../../assets/img/Group 122.png';

const features = [
  {
    title: 'Tools For Teachers And Learners',
    description:
      'Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can track development in real-time to complete and submit.',
    image: Img1,
    reverse: true,

  },
  {
    title: 'Assessments, Quizzes, Tests',
    description:
      'Easily build true/false assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.',
    image: Img2,
  },
  {
    title: 'Class Management Tools for Educators',
    description:
      'Class provides tools to help run and manage the class such as Class Roster, Attendance, and more.',
    image: Img3,
    reverse: true,
  },
  {
    title: 'One-on-One Discussions',
    description:
      'Teachers and students can talk with each other privately without leaving the Zoom environment.',
    image: Img4,
  },
];

const SectionProps = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-[#2F327D] mb-4">Our <span className='text-[#F48C06]'>Features</span></h2>
      <p className="text-center text-gray-500 mb-12">
        This very extraordinary feature, can make learning activities more efficient
      </p>

      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
            feature.reverse ? 'md:flex-row-reverse' : ''
          }`}
        >
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full md:w-1/2 rounded-xl"
          />
          <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-[#F48C06] font-semibold font-[Poppins] text-[40px] mb-2">{feature.title}</h3>
          <p className="text-[22px] text-[#696984]">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionProps;
