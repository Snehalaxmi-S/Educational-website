import React from 'react'
import "./hero.css";

const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed officiis, hic laborum similique rem possimus dolor nihil accusantium eligendi a, vitae ratione? Beatae provident distinctio impedit reiciendis, molestiae vero.</p>
                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button className="primary-btn">
                            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero