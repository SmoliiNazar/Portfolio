import { Fragment } from "react"

import './about.scss';

const About = () => {
    return (
        <Fragment>
            <section id="about" className="about">
                <div className="container">
                    <div className="about__wrapper">
                        <div className="about__photo">
                            <img src="imgs/ya3.jpg" alt="photo"/>
                        </div>
                        <div className="about__descr">
                            <h2 className="title title_fz16 about__title">ABOUT ME</h2>
                            <div className="title title_fz36 about__subtitle">My name is Nazar</div>
                            <div className="divider"></div>
                            <p className="about__text">Im an frontend developer from Ukraine without any experience. I started to learning web development since december of previous year and I'm ready to show the world my skills that i get after studying for 8 moths.
                            </p>
                        </div>
                        <div className="about__skills">
                            <div className="about__skills-item">
                                <div className="about__skills-circle">
                                    <img src="icons/about_me/web_development.svg" alt="web-dev"/>
                                </div>
                                <div>
                                    <div className="title title_fz14">
                                        Frontend development
                                    </div>
                                    <p className="about__skills-text">
                                        Im an Junior Frontend developer. Im working with React, JavaScript, HTML, CSS/SCSS/SASS. Also Im learning TypeScript basics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About;