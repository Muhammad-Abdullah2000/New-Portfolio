import React from 'react'
import img1 from '../img/mabdullah.png';

const Header = () => {
  return (
    <section className="header">
        <div className="container header-container">
            <div className="social">
                <a href="/" target="_blank"><i className='bx bxl-facebook-square'></i></a>
                <a href="/" target="_blank"><i className='bx bxl-instagram-alt'></i></a>
                <a href="/" target="_blank"><i className='bx bxl-github'></i></a>
                <a href="/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
            </div>
            <div className="info">
                <h1>Software Engineer & UX/UI Designer</h1>
                <h3>Muhammad Abdullah</h3>
                <p>Hi, My name is Muhammad Abdullah from Pakistan. I am a student of Bachelor's of Software Engineering.
                    I am also a MERN Stack Developer, Java Developer and UX/UI Designer.</p>
                <a href="/" className="btn btn-primary">Talk With Me</a>
            </div>

            <div className="hero-aria">
                <div className="circle">
                    <span><i className='bx bxs-pencil'></i></span>
                    <span><i className='bx bx-code-alt'></i></span>
                    <span><i className='bx bxs-sun'></i></span>
                    <span><i className='bx bxl-dropbox'></i></span>


                </div>
                <div className="hero-img">
                    <img src={img1}alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header