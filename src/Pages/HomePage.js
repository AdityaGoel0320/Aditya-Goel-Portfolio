import React from 'react';

const HomePage = () => {
    return (
        <>
            <div className="home_box">
                <div className="">
                    <h1>
                        Hi, I'm <span className="my_name">Aditya Goel</span>
                    </h1>
                    <h3>
                        Front-end Web Developer
                    </h3>
                    <br />
                    <h4>
                        I am Aditya Goel, and I am pursuing B.Tech in Information Technology from Maharaja Agrasen Institute Of Technology, Delhi. My specialty is front-end web development. Currently, I am learning MERN Stack development, and I am also a coder in JAVA. As a passionate learner and a strong believer in gaining new skills and experiences through project work, I am eager to learn new technologies. I am interested in collaborating and exploring new opportunities.
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
                            <a target='_blank' href="https://drive.google.com/file/d/1u1DUVwBOf2mLgqAc_4pOjf2AHqsDQQQ7/view">
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
