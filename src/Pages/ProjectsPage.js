import React, { useState } from 'react'
import ProjectArr from '../components/ProjectArr'
import ProjectCard from '../components/ProjectCard'
const ProjectsPage = () => {
  return (
    <>
      <h2>ProjectsPage</h2>
      {/* poject array */}
      {
        ProjectArr.map((x) => {
          let {name  , repo , link , img , techUsed , desc} = x  ; 
          return <ProjectCard  name  = {name} repo = {repo}  link = {link} img = {img} techUsed = {techUsed}  desc = {desc} />
        })
      }
    </>
  )
}

export default ProjectsPage