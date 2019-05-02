import React from 'react';
import './Resume.css';
import Robin from './images/robin1.jpg';

class Resume extends React.Component {
    render() {
        return (
            <div className="resume-wrapper">
                <section className="profile section-padding">
                    <div className="container">
                        <div className="picture-resume-wrapper">
                            <div className="picture-resume">
                                <div className="circle-1"></div>
                                <div className="circle-2"></div>
                                <img src={Robin} alt="" />
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="name-wrapper">
                            <h1>&nbsp;&nbsp; Robin <br />&nbsp;&nbsp;&nbsp;Jain</h1>
                        </div>
                        <div className="clearfix"></div>
                        <div className="contact-info clearfix">
                            <ul className="list-titles">
                                <li>Call </li>
                                <li>Mail </li>
                                <li>Home </li>
                                <li>GitHub </li>
                                <li>Portfolio</li>
                                <li>Linkedin</li>
                            </ul>
                            <ul className="list-content">
                                <li><a href="tel:637-731-0289">+91 6377310289</a></li>
                                <li><a href="mailto:robinjain9587@gmail.com?subject=Following up from Résumé">robinjain9587@gmail.com</a></li>
                                <li>Hindaun city (Rajasthan)</li>
                                <li><a href="https://github.com/12141999">github - robin jain</a></li>
                                <li><a href="https://portfolio-robin.herokuapp.com">portfolio - robin jain</a></li>
                                <li><a href="https://www.linkedin.com/in/robin-jain-895176162/">linkedin - robin jain</a></li>
                            </ul>
                        </div>
                        <div className="contact-presentation">
                            <p><span className="bold">Education</span> 2016-2020 I attended jaypee University to study computer science engineering. </p>
                        </div>
                        <div className="contact-social clearfix">
                            <ul className="list-titles">
                                <li>Contacts</li>
                            </ul>
                            <ul className="list-content">
                                <li>&nbsp;</li>
                                <li><a href="tel:978-373-0301">(978) 373-0301</a></li>
                                {/* <li><a href="tel:637-731-0289">(637) 731-0289</a></li> */}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="experience section-padding">
                    <div className="container">
                        <h3 className="experience-title">Education</h3>
                        <div className="experience-wrapper">
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Keshav Vidhya <br/> Mandir</div>
                                <div className="time">10th standard</div>
                            </div>
                            <div className="job-wrapper clearfix">
                                <div className="experience-title">89.67%</div>
                                <div className="company-description">
                                    <p>RBSE board</p>
                                </div>
                            </div>
                        </div>
                        <div className="experience-wrapper">
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Nirmal Happy  <br/> School</div>
                                <div className="time">12th standard</div>
                            </div>
                            <div className="job-wrapper clearfix">
                                <div className="experience-title">90.20%</div>
                                <div className="company-description">
                                    <p>RBSE board</p>
                                </div>
                            </div>
                        </div>
                        <h3 className="experience-title margin">Experience</h3>
                        <div className="experience-wrapper">
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Freastal <br /> technologies</div>
                                <div className="time">2 Months</div>
                            </div>
                            <div className="job-wrapper clearfix">
                                <div className="experience-title">Web-developer (intern)</div>
                                <div className="company-description">
                                    <p>Build a admin based website and used node js and mongodb for make a classic backend.</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-wrapper clearfix">
                            <h3 className="section-title">Skills</h3>
                            <ul className="list-titles">
                                <li className="skill-percentage">Javascript / Node.JS</li>
                                <li className="skill-percentage">Javascript / React.JS</li>
                                <li className="skill-percentage">Database / MongoDB</li>
                                <li className="skill-percentage">Javascript / Express JS</li>
                                <li className="skill-percentage">Web-Socket / Socket.io</li>
                                <li className="skill-percentage">C / C++ </li>
                                <li className="skill-percentage">Linux / npm / REST Api</li>
                                <li className="skill-percentage">Python/ Machine Learning</li>
                                <li className="skill-percentage">HTML / HTML5</li>
                                <li className="skill-percentage">CSS / SASS</li>
                                <li className="skill-percentage">Handlebars.JS(ejs,hbs)</li>
                                <li className="skill-percentage">Bootstrap </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default Resume;