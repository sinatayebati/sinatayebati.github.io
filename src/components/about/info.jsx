import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award about__icon'></i>

                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4+ Years Research</span>
            </div>

            <div className="about__box">
            <i class='bx bx-task about__icon'></i>
            
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">28+ Projects</span>
            </div>

            <div className="about__box">
            <i class='bx bx-code-block about__icon'></i>

                <h3 className="about__title">Freelancing</h3>
                <span className="about__subtitle">1+ Years</span>
            </div>
        </div>
    )
}

export default Info