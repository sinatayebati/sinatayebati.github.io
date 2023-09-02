import React from "react";

const Deeplr = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Deep Learning</h3>

            <div className="skills__box">
                
                <div className="skills__group">

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">PyTorch</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Pyro</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                </div>

                <div className="skills__group">

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">TensorFlow</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Scikit-Learn</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                </div>

            </div>
        </div>
    )
}

export default Deeplr