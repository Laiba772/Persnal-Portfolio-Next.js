
'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState<Record<number, boolean>>({});

  const projects = [
    {
      id: 1,
      imageSrc: '/service-2.PNG',
      title: 'Travelling-Website',
      description: 'Travel, enjoy and live a new and full life Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening Park Gate sell they west hard for the.',
      link: 'https://travelling-website-next-js.vercel.app/'
    },
    {
      id: 2,
      imageSrc: '/Screenshot 2024-11-13 160905.png',
      title: 'Resume Builder',
      description: 'Whether youre in tech, finance, or any other industry, our platform makes creating a professional resume quick and easy. Just fill in your details and youre ready to impress.',
      link: 'https://hackatone1-mile1-2.vercel.app/'
    },
    {
      id: 3,
      imageSrc: '/service-1.PNG',
      title: 'E-Commerce-Website',
      description: ' The blog features a variety of articles discussing coffee beans, brewing techniques, product reviews, and stories from the coffee world.',
      link: 'https://e-commerce-shopping-website-next-js.vercel.app/'
    },
  ];

  useEffect(() => {
    const projectElements = document.querySelectorAll('.project');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => ({ ...prev, [index]: true }));
          } else {
            setVisibleProjects((prev) => ({ ...prev, [index]: false }));
          }
        });
      },
      { threshold: 0.5 }
    );

    projectElements.forEach((project) => observer.observe(project));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-10 py-5 lg:my-20 w-[95%] lg:w-[90%] mx-auto lg:mb-10">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Project</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-index={index}
            className={`project flex flex-col items-center border-2 border-white p-2 rounded-lg transition-transform duration-700 ease-out bg-white
              ${visibleProjects[index] ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-10 opacity-0'}
            `}
          >
            <div className="w-auto h-[200px] lg:w-[95%] overflow-hidden rounded-md">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-md border-2 border-gray-400"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-sm mt-2 text-center">
              {project.description}
            </p>
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-lg">
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
