/* eslint-disable react/jsx-key */
import React from 'react'
import { skills } from '../../Data'
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title text-cs">
            Professional Skills
        </h2>
        <p className="section__subtitle">
            My <span>Skills</span>
        </p>

        <div className="skills__container container grid">
            {skills.map((item, index) => {
                return(
                    <div className="skills__content"  key={index}>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">{item.name}</h3>
                                <span className="skills__number">
                                    {item.percentage} <span>%</span>
                                </span>
                            </div>

                            <p className="skills__description">
                            {item.description}
                        </p>

                        <div className="skills__bar">
                            <span 
                                className="skills__percentage" 
                                style={{ width: `${item.percentage}%` }}
                            >
                                <span></span>
                            </span>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Skills