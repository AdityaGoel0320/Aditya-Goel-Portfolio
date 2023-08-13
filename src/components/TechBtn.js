import React from 'react'
import "./TechBtn.css"
const TechBtn = (props) => {
    let { name } = props;

    return (
        <>
            <button className='project_btn'>
                {name}
            </button>
        </>
    )
}

export default TechBtn