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
                        <div className="publication__title">
                            STARNet: Sensor Trustworthiness and Anomaly Recognition via Approximated Likelihood Regret for Robust Edge Autonomy
                        </div>
                        <div className="publication__authors">
                            Darabi N, Tayebati S, Sureshkumar S, Ravi S, Tulabandhula T, Trivedi A.R
                        </div>
                        <a href="https://arxiv.org/abs/2309.11006" className="publication__link" target="_blank">
                            Download
                        </a> 
                    </div>

                    <div className="publication">
                        <div className="publication__title">
                            A Hybrid Machine Learning Framework for Clad Characteristics Prediction in Metal Additive Manufacturing
                        </div>
                        <div className="publication__authors">
                            Tayebati S, Cho KT
                        </div>
                        <a href="https://arxiv.org/abs/2307.01872" className="publication__link" target="_blank">
                            Download
                        </a> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publication