import React from 'react'
import Back from '../common/back/Back'
import "./contact.css";

const Contact = () => {
    const map ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0088333202248!2d80.0431775!3d12.971286399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f4d07355bab5%3A0xbb6063169c4ed4d9!2sChennai%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1687882340504!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
  return (
    <>  
        <Back title='Contact Us'/>
        <section className="contact padding">
            <div className="container shadow flexSB">
                <div className="left row">
                    <iframe src={map}></iframe>
                </div>
                <div className="right row">
                    <h1>Contact Us</h1>
                    <p>Delectus nostrum, quos mollitia officiis quod ullam? Architecto, in.</p>
                    <div className="items grid2">
                        <div className="box">
                            <h4>ADDRESS: </h4>
                            <p>198 west 21st street, suite 751 New York NY 10016</p>
                        </div>
                        <div className="box">
                            <h4>Email:</h4>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="box">
                            <h4>Phone:</h4>
                            <p>+91 9876543210</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="flexSB">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <input type="text" placeholder='Subject' />
                        <textarea cols="30" rows="10">
                            Type your message here...
                        </textarea>
                        <button className='primary-btn'>SEND MESSAGE</button>
                    </form>
                    <h3>Follow us here</h3>
                    <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact