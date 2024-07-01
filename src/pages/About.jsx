import React from 'react'
import '../styles/About.css';
import img from '../img/mabdullah.png';


const About = () => {
    return (
        <section id="About">
            <h1>About Me</h1>
            <div className="container about-container">

                <div className="about-img">
                    <img src={img} alt="" />
                </div>

                <div className="about-des">
                    <p>Hi, My name is Abdullah from Pakistan. I am a student of Bachelor's of Software Engineering. I am
                        also a MERN Stack Developer, Java Developer and UX/UI Designer. I am also a goal oriented,
                        determined and ambitious with a passion of development. The only thing I need from you is an idea or
                        a rough sketch of your future project. I will provide the rest.</p>

                    <div className="read-more">
                        <p>I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with
                            ease. I believe that a person should work on developing their professional skills and learning
                            new things all the time. Currently, I am looking for new career opportunities my current job
                            position cannot provide.</p>



                    </div>

                    <a href="" target="_blank" download="CV.pdf" className="btn btn-primary"><i className='bx bxs-download'></i> &nbsp; Download Resume </a>
                </div>

            </div>

        </section>
    )
}

export default About