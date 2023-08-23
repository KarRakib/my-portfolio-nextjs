
import AllProject from "./AllProject";

// import Project from './Project';
const getMyProjects = async()=>{
    try {
      const res = await fetch('http://localhost:3000/api/projects',{cache:"no-cache"})
      return  await res.json()
    } catch (error) {
      console.log(error);
    }
  }
const MyProject =  async() => {
    const {projects} = await getMyProjects()
    console.log('dekha jay kina', projects);
    
    return (
     
        <AllProject projects={projects} ></AllProject>
        
    );
};/*  */

export default MyProject;
             {/* <h3 className='text-4xl font-semibold project text-center'> My Project</h3>
<div className='p'>
    card
    <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
    </div>
    <a href="kar.com" target='_blank'>
        <img className='p-image' src={image} alt="" srcSet="" />
    </a>
</div> */}