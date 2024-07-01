import React from 'react'

export const Sevices = () => {
  return (
    <section id="Services">
    <h1>Services</h1>

    <div className="container service-container">
        <div className="service-card">
            <i className='bx bxs-pencil'></i>
            <h3>Creative Cloud</h3>
            <p>I will create a user-friendly and engaging UI design, so your users will have no trouble finding what
                they need and getting the most out of your service</p>
        </div>

        <div className="service-card">
            <i className='bx bx-code-alt'></i>
            <h3>Web Development</h3>
            <p>I can provide you with the service that best fits your needs. My goals is to make your website a tool
                to help you reach your business goals. I will develop a site that will be search engine friendly and
                easy to handle.</p>
        </div>

        <div className="service-card">
            <i className='bx bxl-android'></i>
            <h3>App Development</h3>
            <p>I will create hand-set specific user interface (UI) for mobile phones and Tablets that scored 91% on
                in house ergonomics test suit.</p>
        </div>

    </div>

</section>
  )
}
