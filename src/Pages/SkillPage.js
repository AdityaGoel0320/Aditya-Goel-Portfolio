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



            <div className=''>
                <h1 className='skills flex justify-center items-center'>

                    SKILLS
                </h1>



                <div className="flex justify-center items-center">
                    <div className="small_nav" id='techStackBtn'>

                        <button className='' onClick={() => filterItem("All")}>All</button>
                        <button onClick={() => filterItem("Frontend")}>Frontend</button>
                        <button onClick={() => filterItem("Backend")}>Backend</button>
                        <button onClick={() => filterItem("Other")}>Other</button>

                    </div>

                </div>

                <div className='techstack_container flex justify-center items-center flex-wrap m-5 gap-5'>
                {/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 m-12 p-3"> */}

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