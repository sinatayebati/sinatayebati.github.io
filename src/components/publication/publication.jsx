import React from "react";
import "./publication.css";

const Publication = () => {
    return (
        <section className="publications section" id="publication">
            <h2 className="section__title">Publications</h2>
            <span className="section__subtitle">My Research Papers</span>

            <div className="publication__container container">
                <div className="publication__content">
                    <div className="publication">
                        <h3 className="publication__title">
                            Sense Less, Generate More: Pre-training LiDAR Perception with Masked Autoencoders for Ultra-Efficient 3D Sensing
                        </h3>
                        <p className="publication__authors">
                            <strong>Tayebati S</strong>, Tulabandhula T, Trivedi A.R
                        </p>
                        <a href="https://arxiv.org/abs/2406.07833" className="publication__link" target="_blank" rel="noopener noreferrer">
                            Download Paper <i className="bx bx-download publication__button-icon"></i>
                        </a> 
                    </div>
                    <div className="publication">
                        <h3 className="publication__title">
                            STARNet: Sensor Trustworthiness and Anomaly Recognition via Approximated Likelihood Regret for Robust Edge Autonomy
                        </h3>
                        <p className="publication__authors">
                            Darabi N, <strong>Tayebati S</strong>, Sureshkumar S, Ravi S, Tulabandhula T, Trivedi A.R
                        </p>
                        <a href="https://arxiv.org/abs/2309.11006" className="publication__link" target="_blank" rel="noopener noreferrer">
                            Download Paper <i className="bx bx-download publication__button-icon"></i>
                        </a> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publication