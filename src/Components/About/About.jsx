import { Fragment } from "react"

import './about.scss';

const About = () => {
    return (
        <Fragment>
            <section id="about" class="about">
                <div class="container">
                    <div class="about__wrapper">
                        <div class="about__photo">
                            <img src="imgs/ya.jpg" alt="photo"/>
                        </div>
                        <div class="about__descr">
                            <h2 class="title title_fz16 about__title">ABOUT ME</h2>
                            <div class="title title_fz36 about__subtitle">My name is Nazar</div>
                            <div class="divider"></div>
                            <p class="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div class="about__skills">
                            <div class="about__skills-item">
                                <div class="about__skills-circle">
                                    <img src="icons/about_me/web_development.svg" alt="web-dev"/>
                                </div>
                                <div>
                                    <div class="title title_fz14">
                                        Frontend development
                                    </div>
                                    <p class="about__skills-text">
                                        Im an Junior Frontend developer. Im working with React + Redux, JavaScript, HTML, CSS/SCSS/SASS. Also Im learning TypeScript basics
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