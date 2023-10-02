import React from "react";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>


            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Looking for collaboration?</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">stayeb3@uic.edu</span>

                            <a href="#" className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-map contact__card-icon"></i>

                            <h3 className="contact__card-title">Location</h3>
                            <span className="contact__card-data">Chicag0, IL, U.S.</span>

                            <a href="#" className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxs-hand-right contact__card-icon"></i>

                            <h3 className="contact__card-title">Try it</h3>
                            <span className="contact__card-data">It actually works!</span>

                            <a href="#" className="contact__button">
                                Write me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project!</h3>

                    <form action="#" className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="#" className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Insert your name"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="#" className="contact__form-tag">Mail</label>
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                            />
                        </div>    

                        <div className="contact__form-div">
                            <label htmlFor="#" className="contact__form-tag">Project</label>
                            <textarea 
                            name="project" 
                            cols="30" 
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your project"
                            ></textarea>
                        </div>                          
                    </form>
                </div>
            </div>
            
        </section>
    )
}

export default Contact