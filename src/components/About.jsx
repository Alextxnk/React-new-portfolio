import React from 'react';

// import image
import Image from '../assets/img/about.webp';

const About = () => {
   return (
      <section id='about' className='section bg-secondary'>
         <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
               <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="img" />
               <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex flex-col">
                     <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>Alexey Solovyev</h2>
                     <p className='mb-4 text-accent'>Web Developer</p>
                     <hr className='mb-8 opacity-5' />
                     <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officia provident dolor commodi tempore quos sunt labore necessitatibus voluptatibus quas. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur soluta porro perferendis inventore doloremque consequuntur atque est, dolores, ratione, magnam corporis molestias!</p>
                  </div>
                  <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact me</button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;