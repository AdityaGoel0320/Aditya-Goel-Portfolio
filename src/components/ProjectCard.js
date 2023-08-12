import React from 'react'
import TechBtn from './TechBtn';

const ProjectCard = (props) => {
    let { name, repo, link, img, techUsed, desc } = props;

    return (
        <>
            <div>ProjectCard</div>

            <div className="flex">
                <div className="flex flex-col">
                    <div className="flex justify-center items-center">
                        <h3>{name}</h3>
                        <a href={link} target='_blank'>Link</a>
                        <a href={repo} target='_blank'>repo</a>
                    </div>
                    <p>{desc}</p>
                    <div className="flex justify-center items-center">

                        {
                            techUsed.map((x) => {
                                return <TechBtn name={x} />
                            })
                        }
                    </div>

                </div>
                <div className="img">
                    <img src={img} alt="" />

                </div>

            </div>
        </>
    )
}

export default ProjectCard