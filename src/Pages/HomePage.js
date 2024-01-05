import React from 'react';

const HomePage = () => {
    return (
        <>
            <div className="home_box">
                <div className="">
                    <h1>
                        Myself <span className="my_name">Aditya Goel</span>
                    </h1>
                    <h3>
                        Full Stack Web Developer
                    </h3>
                    <br />
                    <h4>
                        Aditya Goel, currently pursuing B.Tech in Information Technology at
Maharaja Agrasen Institute of Technology, Delhi. Specializing in MERN 
stack for full-stack web development and proficient in Java coding. 
Possessing industry-level experience from a 3-month internship in a 
startup, I contributed to the development of a web application. As a 
fervent learner and advocate for acquiring new skills through project 
work, I am enthusiastic about exploring and collaborating on innovative 
opportunities in the field.
                    </h4>

                    <div className='flex items-center justify-center gap-5 m-5'>
                        <a href="https://github.com/AdityaGoel0320" target="_blank" rel="noopener noreferrer" className='color-black'>
                            <i id='i' className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/aditya-goel-286245239" target="_blank" rel="noopener noreferrer" className='color-black'>
                            <i id="i" className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://twitter.com/AdityaGoel0320?t=DWSov778bgHXMkyQxELrow&s=09" target="_blank" rel="noopener noreferrer" className='color-black'>
                            <i id='i' className="fa-brands fa-x-twitter"></i>
                        </a>
                        <button className='resume_btn'>
                            <a target='_blank' href="https://drive.google.com/drive/folders/1PhVapINP8Z-rt86zmuMGT_2q5ZN-OPon?usp=sharing">
                                <span className='resume_span'>Resume</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
