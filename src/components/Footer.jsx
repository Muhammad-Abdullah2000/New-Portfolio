import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container footer-container">
        <ul>
            <li><a href="#" className="nav-active">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Skill">Skill's</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        <div className="social">
            <a href="" target="_blank"><i className='bx bxl-facebook-square'></i></a>
            <a href="" target="_blank"><i className='bx bxl-instagram-alt'></i></a>
            <a href="" target="_blank"><i className='bx bxl-github'></i></a>
            <a href="" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
        </div>
    </div>
</footer>
  )
}

export default Footer