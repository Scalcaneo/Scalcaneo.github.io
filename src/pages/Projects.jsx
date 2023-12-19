import { Link } from 'react-router-dom';
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

/**
 * Projects component displaying a portfolio of projects.
 * 
 * This component presents a portfolio section showcasing various projects. Each project
 * is displayed with a unique theme, icon, name, and description. A link to each project
 * is provided for more details. The section starts with an introductory text and ends with 
 * a call-to-action (CTA) component. The layout is responsive and utilizes Tailwind CSS for styling.
 * 
 * @returns {JSX.Element} A JSX element representing the projects section.
 */
const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span 
          className='blue-gradient_text font-semibold drop-shadow'>
            Projects
          </span> 
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p> 
        Welcome to my portfolio, where practicality meets creativity
         in software development. Here, you'll find a collection of 
         projects that are as functional as they are innovative. 
         My focus is on building software with clean, 
         efficient code. Each project is a testament to my commitment 
         to quality and usability, designed to solve real-world problems 
         with a touch of creative flair. Whether you're here for professional 
         collaboration or just exploring, I hope you find these projects both 
         insightful and a reflection of my passion for technology and 
         problem-solving. Enjoy your visit!
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='Project Icon' 
                  className='w-11 h-11 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link 
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img 
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
}

export default Projects;
