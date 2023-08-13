import React from 'react'
import TechBtn from './TechBtn';

const ProjectCard = (props) => {
    let { name, repo, link, img, techUsed, desc } = props;

    return (
        <>

            <div className="flex project_card">
                <div className="flex flex-col gap-3 ">
                    <div className="prject_heads flex justify-center items-center">
                        <h3>{name}</h3>
                        <a className='a' href={repo} target='_blank'><i id='project_icon' class="fa-brands fa-github "></i></a>
                        <a href={link} target='_blank'><i id="project_icon" class="fa-sharp fa-solid fa-link "></i></a>
                    </div>
                    <p className='project_desc'>{desc}</p>
                    <div className=" z flex justify-center items-center">

                        {
                            techUsed.map((x) => {
                                return <TechBtn name={x} />
                            })
                        }
                    </div>

                </div>
                <div className="">
                    <img className="img" src={img} alt="" />

                </div>

            </div>
        </>
    )
}

export default ProjectCard