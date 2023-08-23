'use client'

import Project from "./Project";

const AllProject = ({projects}) => {
    console.log('im from all project', projects);
    return (
        <div>
             <div className='py-10  md:w-[1200px] lg:w-[1600px] mx-auto'>
             <h1 className='text-4xl text-center font-semibold text-[#C4CFDE]'> My Project </h1>
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 py-8'>

                 {
                     projects?.map(project => <Project key={project.id} project={project}></Project>)
                 }
   
             </div>
         </div>
        </div>
    );
};

export default AllProject;