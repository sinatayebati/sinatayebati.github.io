import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Sina Tayebati</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#publication" className="footer__link">Publication</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/sinatayebati" className="footer__social-link" target="_blank">
                        <i class='bx bxl-github'></i>
                    </a>

                    <a href="https://www.linkedin.com/in/sina-tayebati/" className="footer__social-link" target="_blank">
                        <i class='bx bxl-linkedin' ></i>
                    </a>

                    <a href="https://scholar.google.com/citations?user=GjfKPkUAAAAJ&hl=en&oi=ao" className="footer__social-link" target="_blank">
                        <i class='bx bxs-graduation' ></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Sina Tayebati. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer