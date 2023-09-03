import React from "react";

const Freelance = () => {
    return (
        <section className="freelance section" id="freelance">
            <h2 className="section__title">Freelancing</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="frelance__container container grid">
                <div className="freelance__content">
                    <div>
                        <i className="uil uil freelance__icon"></i>
                        <h3 className="freelance__title"></h3>
                    </div>

                    <span className="freelance__button">View More <i className="uil uil-arrow-right freelance__button-icon"></i></span>

                    <div className="freelance__modal">
                        <div className="freelance__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"></h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Freelance