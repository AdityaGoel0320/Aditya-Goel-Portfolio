import React, { useState } from 'react'
import SkillCard from '../components/SkillCard'
import arr from '../components/SkillArr'

const SkillPage = () => {
    const [skillarr, setskillarr] = useState(arr)
    let filterItem = (clickedType) => {

        if (clickedType === "All") {
            setskillarr(arr);
        } else {

            let ans = arr.filter((x) => {
                return x.type === clickedType

            })

            setskillarr(ans)

        }
    }
    return (
        <>



            <div className='skill_main_div'>
                <h1 className='skills flex justify-center items-center'>
                    SKILLS
                </h1>


                <div className="flex justify-center items-center">
                    <div className="small_nav " id='techStackBtn'>

                        <button className='btn_small btn' onClick={() => filterItem("All")}>All</button>
                        <button className='btn_small btn' onClick={() => filterItem("Frontend")}>Frontend</button>
                        <button className='btn_small btn' onClick={() => filterItem("Backend")}>Backend</button>
                        <button className='btn_small btn' onClick={() => filterItem("Other")}>Other</button>

                    </div>

                </div>

                <div className='techstack_container'>

                    {
                        skillarr.map((x) => {
                            return <SkillCard className="" name={x.name} img={x.img} />
                        })
                    }
                </div>




            </div>

        </>
    )
}

export default SkillPage