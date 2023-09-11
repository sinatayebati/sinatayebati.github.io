import React, { useState } from "react";
import "./freelance.css";

const Freelance = () => {
        const [toggleState, setToggleState] = useState(0);

        const toggleTab = (index) => {
            setToggleState(index);
        }

    return (
        <section className="freelance section" id="freelance">
            <h2 className="section__title">Freelancing</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="freelance__container container grid">

                <div className="freelance__content">
                    <div>
                        <i className="uil uil-brain freelance__icon"></i>
                        <h3 className="freelance__title">AI <br /> Developer</h3>
                    </div>

                    <span className="freelance__button" onClick={() =>
                    toggleTab(1)}>View More <i className="uil uil-arrow-right freelance__button-icon"></i></span>

                    <div className={toggleState === 1 ? "freelance__modal active-modal" : "freelance__modal"}>
                        <div className="freelance__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times freelance__modal-close"></i>

                            <h3 className="freelance__modal-title">AI developer</h3>
                            <p className="freelance__modal-description">Freelance services and collaborations with more than 3 years of experiennce.</p>

                            <ul className="freelance__modal-freelance grid">

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">
                                        Deep learning and AI
                                    </p>
                                </li>

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">
                                        Advanced computer vision
                                    </p>
                                </li>

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">
                                        Conventional data science 
                                    </p>
                                </li>

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">
                                        MLOps
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="freelance__content">
                    <div>
                        <i className="uil uil-arrow freelance__icon"></i>
                        <h3 className="freelance__title">Frontend <br /> Developer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="freelance__button">
                        View More <i className="uil uil-arrow-right freelance__button-icon"></i></span>

                    <div className={toggleState === 2 ? "freelance__modal active-modal" : "freelance__modal"}>
                        <div className="freelance__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times freelance__modal-close"></i>

                            <h3 className="freelance__modal-title">Frontend developer</h3>
                            <p className="freelance__modal-description">Freelance services and collaborations with more than 1 year of experiennce.</p>

                            <ul className="freelance__modal-freelance grid">

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">
                                        Responsive web design
                                    </p>
                                </li>

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">                                
                                        UI development and integration
                                    </p>
                                </li>

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">
                                        UX element interactions
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="freelance__content">
                    <div>
                        <i className="uil uil-server freelance__icon"></i>
                        <h3 className="freelance__title">Backend <br /> Developer</h3>
                    </div>

                    <span className="freelance__button">View More <i className="uil uil-arrow-right freelance__button-icon"></i></span>

                    <div className="freelance__modal">
                        <div className="freelance__modal-content">
                            <i className="uil uil-times freelance__modal-close"></i>

                            <h3 className="freelance__modal-title">Backend developer</h3>
                            <p className="freelance__modal-description">Freelance services and collaborations with more than 1 year of experiennce.</p>

                            <ul className="freelance__modal-freelance grid">

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">                              
                                        Server-side application development
                                    </p>
                                </li>

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">
                                        Performance optimization and scaling
                                    </p>
                                </li>

                                <li className="freelance__modal-freelance">
                                    <i className="uil uil-check-circle freelance__modal-icon"></i>
                                    <p className="freelance__modal-info">
                                        Database design and optimization
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Freelance