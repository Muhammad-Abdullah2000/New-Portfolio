import React from 'react'

const Contact = () => {
  return (
    <section id="Contact">
    <div className="over">
        <div className="container contact-container">
            <h1>Contact Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto eum, vero totam saepe
                inventore sit? Dolorum nisi incidunt eligendi.</p>
            <form action="">
                <input type="text" placeholder="Enter Your Name" required name="name"/>
                <input type="email" placeholder="Enter Your Email" required name="email"/>
                <input type="text" placeholder="Enter Your Subject" required name="subject"/>
                <textarea placeholder="Enter Your Message" required name="message"></textarea>
                <input type="submit" value="Send" className="btn btn-primary"/>
            </form>
        </div>
    </div>
</section>
  )
}

export default Contact