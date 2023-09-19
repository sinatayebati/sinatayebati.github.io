import React from "react";
import "./work.css"
import { projectsData } from "./data";
import { projectsNav } from "./data";

const Works = () => {
    return (
        <div className="work__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span className="work__item">{item.name}</span>
                )
            })}
        </div>
    )
}

export default Works