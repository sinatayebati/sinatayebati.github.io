import React from "react";
import "./publication.css";

const Publication = () => {
    return (
        <section className="publications section" id="publication">
            <h2 className="section__title">Publication</h2>
            <span className="section__subtitle">My research papers</span>

            <div className="publication__container container grid">
                <div className="publication__content">
                    <ul>
                        <li>
                            <div className="publication">
                                <div className="publication__title">
                                    A hybrid machine learning framework for clad characteristics prediction in metal additive manufacturing
                                </div>
                                <div className="publication__authors">
                                    S Tayebati, KT Cho - arXiv preprint arXiv:2307.01872, 2023 - arxiv.org
                                </div>
                                <a href="https://arxiv.org/abs/2307.01872" className="publication__link" target="blank">
                                    <div class="link">Download</div>
                                </a> 
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>

        </section>
    )
}

export default Publication