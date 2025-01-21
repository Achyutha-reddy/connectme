import React ,{ useState } from 'react'
import "./qualification.css"
import {GiGraduateCap} from 'react-icons/gi'
import {BiBriefcaseAlt2} from 'react-icons/bi'
const Qualification = () => {
    const[toggleState,setToggleState] = useState(1);
    const toggleTab =(index) =>{
        setToggleState(index);
    };
  return (
    <section className="qualification section" id='qualification'>
        <h5 className="section__subtitle">MY PERSONAL JOURNEY</h5>
        <h2 className="section__subtitle">QUALIFICATION</h2>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__active button--flex"}
                    onClick={() => toggleTab(1)}>
                    {/* <i className="uil uil-graduation-cap qualificationn__icon"></i> */}
                    <GiGraduateCap className='qualification__icon' />EDUCATION
                </div>
                <div className={toggleState === 2 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__active button--flex"}
                    onClick={() => toggleTab(2)}>
                <BiBriefcaseAlt2 className='qualification__icon' />
                    {/* <i className="uil uil-briefcase-alt qualificationn__icon"></i> */}
                    EXPERIENCE
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">SSC</h3>
                            <span className="qualifiaction__subtitle">REVATHI HIGH SCHOOL</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2018-2019
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">INTERMEDIATE</h3>
                            <span className="qualifiaction__subtitle">SRI CHAITANYA Jr. COLLEGE</span>
                            <span className="qualifiaction__subtitle"><h5>(MPC)</h5></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2019-2021
                            </div>
                        </div>   
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">GRADUATION</h3>
                            <span className="qualifiaction__subtitle">VIDYA JYOTHI INSTITUTE OF TECHNOLOGY</span>
                            <span className="qualifiaction__subtitle"><h5>(COMPUTER SCIENCE AND ENGINEERING)</h5></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2021-2026
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">OPEN SOURCE</h3>
                            <span className="qualifiaction__subtitle">GITHUB</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2023-Present
                            </div>
                        </div>   
                    </div>
                </div>

                <div className={toggleState === 2
                ? "qualification__content qualification__content-active" 
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">WEB DESIGNER</h3>
                            <span className="qualifiaction__subtitle">GITHUB</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2023-Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                        <h3 className="qualification__title">AI ML</h3>
                        <span className="qualifiaction__subtitle">Github</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2021 - 2022
                        </div>
                        </div>   
                    </div> */}

                    {/* <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">REACT</h3>
                            <span className="qualifiaction__subtitle">GITHUB</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2023-Present
                            </div>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}
                    
                    <div className="qualification__data">
                    <div></div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                        <div>
                        <h3 className="qualification__title">REACT</h3>
                            <span className="qualifiaction__subtitle">GITHUB</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2023-Present
                            </div>
                            
                        </div>

                    </div>
                    {/* <div className="qualification__data">
                    <div>
                    <h3 className="qualification__title">Next JS</h3>
                    <span className="qualifiaction__subtitle">Github</span>
                    <div className="qualification__calender">
                        <i className="uil uil-calender-alt"></i>2024 - Present
                    </div>
                </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                        <div></div>

                    </div> */}
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification