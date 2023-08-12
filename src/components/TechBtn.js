import React from 'react'
import "./TechBtn.css"
const TechBtn = (props) => {
    let { name } = props;

    return (
        <>
            <button className='btn'>
                {name}
            </button>
        </>
    )
}

export default TechBtn