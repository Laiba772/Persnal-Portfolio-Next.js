
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section');
      const sectionTop = aboutSection?.getBoundingClientRect().top;
      const triggerHeight = window.innerHeight * 0.75; 
      if (sectionTop && sectionTop < triggerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className='mt-16 md:mt-20 lg:my-28'>
      <div id="about-section" className={`flex flex-col md:flex-row w-[95%] lg:w-[90%] justify-between items-center text-white mx-auto transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className='md:hidden text-2xl items-center mb-10  border-b-2 border-b-purple-400 font-bold text-white'>
          ABOUT
        </h3>
        <div className='w-[250px] sm:w-[300px] md:w-[400px]'>
          <Image src={"/about-3-removebg-preview (1).png"} alt='about-image' width={500} height={400}/>
        </div>
        <div className='w-[95%] md:w-[60%] lg:w-[50%] mx-auto'>
          <h3 className='hidden text-2xl md:inline-block items-center mb-4  border-b-2 border-b-purple-400 font-bold text-white'>
            ABOUT
          </h3>
          <h2 className='font-bold text-2xl lg:text-4xl mt-10 mb-6 md:mt-1 md:mb-4 font-serif text-lavender '>Curious About me? Here you have it:</h2>
          <p className='md:text-xl'>I&apos;m Laiba Naz, a dedicated Frontend Developer and passionate UI/UX Designer who thrives on crafting intuitive and visually engaging digital experiences. With a strong foundation in frontend technologies and a keen eye for design, I specialize in building clean, responsive interfaces that balance form and function.</p>
          <br />
          <p className='md:text-xl'>My journey in web development is driven by a love for learning and the constant pursuit of improvement. Beyond coding, I&apos;m always exploring new design trends and techniques to keep my work both innovative and impactful.</p>
        </div>
      </div>
    </main>
  );
}

export default About;
