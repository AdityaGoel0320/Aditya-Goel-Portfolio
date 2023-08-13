import React, { useState } from 'react'
import ProjectArr from '../components/ProjectArr'
import ProjectCard from '../components/ProjectCard'
const ProjectsPage = () => {
  return (
    <>

      <h1 className='skills flex justify-center items-center'>
        PROJECTS
      </h1>


      <div className="project_container">


        {
          ProjectArr.map((x) => {
            let { name, repo, link, img, techUsed, desc } = x;
            return <ProjectCard name={name} repo={repo} link={link} img={img} techUsed={techUsed} desc={desc} />
          })
        }
      </div>
    </>
  )
}

export default ProjectsPage