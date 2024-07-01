import React from 'react'
import img3 from '../img/arnold-francisca-f77Bh3inUpE-unsplash.jpg';
import img4 from '../img/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg';
import img5 from '../img/markus-spiske-iar-afB0QQw-unsplash.jpg';
import img6 from '../img/nate-grant-QQ9LainS6tI-unsplash.jpg';

const Portfolio = () => {
  return (
    <section id="Portfolio">
        <h4>My Recent Work</h4>
        <h1>Portfolio</h1>

        <div className="container portfolio-container">
            <div className="projects">
                <div className="project">
                    <div className="project-img">
                        <img src={img3} alt=""/>
                    </div>
                    <h2>Complete Website</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, sapiente tenetur voluptatibus
                        itaque quia aspernatur architecto nihil cum rem eveniet mollitia. Quae maiores consequatur
                        corporis corrupti provident dolores blanditiis voluptatum.</p>
                    <div className="project-action">
                        <a href="" target="_blank">Github</a>
                        <a href="" target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project">
                    <div className="project-img">
                        <img src={img4} alt=""/>
                    </div>
                    <h2>Complete Website</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, sapiente tenetur voluptatibus
                        itaque quia aspernatur architecto nihil cum rem eveniet mollitia. Quae maiores consequatur
                        corporis corrupti provident dolores blanditiis voluptatum.</p>
                    <div className="project-action">
                        <a href="" target="_blank">Github</a>
                        <a href="" target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project">
                    <div className="project-img">
                        <img src={img5} alt=""/>
                    </div>
                    <h2>Complete Website</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, sapiente tenetur voluptatibus
                        itaque quia aspernatur architecto nihil cum rem eveniet mollitia. Quae maiores consequatur
                        corporis corrupti provident dolores blanditiis voluptatum.</p>
                    <div className="project-action">
                        <a href="" target="_blank">Github</a>
                        <a href="" target="_blank">Live Demo</a>
                    </div>
                </div>

                <div className="project">
                    <div className="project-img">
                        <img src={img6} alt=""/>
                    </div>
                    <h2>Complete Website</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, sapiente tenetur voluptatibus
                        itaque quia aspernatur architecto nihil cum rem eveniet mollitia. Quae maiores consequatur
                        corporis corrupti provident dolores blanditiis voluptatum.</p>
                    <div className="project-action">
                        <a href="" target="_blank">Github</a>
                        <a href="" target="_blank">Live Demo</a>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Portfolio