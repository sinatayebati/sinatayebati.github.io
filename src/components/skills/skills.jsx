import React from "react";
import "./skills.css";
import Frontend from "./frontend";
import Backend from "./backend";
import Deeplr from "./deeplr";
import Database from "./database";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Deeplr />
                <Frontend />
                <Backend />
                <Database />
            </div>
        </section>
    )
}

export default Skills