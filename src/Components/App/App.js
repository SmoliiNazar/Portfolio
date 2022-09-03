import { useState } from 'react';

import AsidePanel from '../AsidePanel/AsidePanel';
import Menu from '../Menu/Menu';
import Promo from '../Promo/Promo';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import './footer.scss';

function App() { 
    const [menuActive, setMenuActive] = useState(false)

    const items = [
        {id: 'Mm' ,value: 'MAIN PAGE', href: 'promo'}, 
        {id: 'Am' ,value: 'ABOUT ME', href: 'about'}, 
        {id: 'Ms' ,value: 'MY SKILLS', href: 'skills'},
        {id: 'Mw' ,value: 'MY WORKS', href: 'works'},
        {id: 'Ct',value: 'CONTACTS', href: 'footer'},
    ]
    const data = [
        {id: 'Ur' ,href: '/uber', image: 'imgs/works/uber.jpg', alt: 'uber', classes: 'portfolio__item'},
        {id: 'Pe' ,href: 'pulse', image: 'imgs/works/pulse.jpg', alt: 'pulse', classes: 'portfolio__item'},
        {id: 'Ml' ,href: 'https://marvel-app-for-potfolio.herokuapp.com/', image: 'imgs/works/thor.jpeg', alt: 'marvel', classes: 'portfolio__item'},
        {id: 'Fe' ,href: 'https://boostfolia-for-portfolio.herokuapp.com/', image: 'imgs/works/female.png', alt: 'boostfolia', classes: 'portfolio__item vertical'},
        {id: 'Pt' ,href: '/popArt', image: 'imgs/works/popArt.jpg', alt: 'popArt', classes: 'portfolio__item'},
        {id: 'Bi' ,href: '/bringIt', image: 'imgs/works/showup6.jpg', alt: 'bringIt', classes: 'portfolio__item horizonal'}
    ]
    const mySkills = [
        {id: 'h5' ,img: 'html5.svg', alt: 'html5', header: 'HTML5', descr: 'It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product'},
        {id: 'c3' ,img: 'css3.svg', alt: 'css3', header: 'CSS3', descr: 'This style language allows me to create absolutely any look for your site or application. Everything is limited only by your imagination!'},
        {id: 'jt' ,img: 'js.svg', alt: 'java script', header: 'Java Script', descr: 'This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server, and much more.'},
        {id: 'rg' ,img: 'react.svg', alt: 'React', header: 'React', descr: 'This library allows you to create web applications. We can create the most interactive product for your purposes'},
        {id: 'rl' ,img: 'reduxSmall.svg', alt: 'redux', header: 'Redux', descr: "Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation."},
        {id: 'tg' ,img: 'TS.svg', alt: 'type script', header: 'Type Script', descr: 'TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.'},
    ]

    const myRatings = [
        {key: 'HL', title: 'HTML5', counter: '100%', percents: '100%'},
        {key: 'CSS3', title: 'CSS3/SCSS/SASS', counter: '100%', percents: '100%'},
        {key: 'JS', title: 'JavaScript', counter: '90%', percents: '90%'},
        {key: 'REACT', title: 'React', counter: '80%', percents: '80%'},
        {key: 'REDX', title: 'React + Redux', counter: '40%', percents: '40%'},
        {key: 'TSSS', title: 'TypeScript', counter: '10%', percents: '10%'}
    ]

    return(
        <>
            <Promo/>
            <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
                <span></span>
                <span className="long"></span>
                <span></span>
            </div>
            <AsidePanel/>
            <About/>
            <Skills myRatings={myRatings} mySkills={mySkills}/>
            <Portfolio data={data}/>
            <footer id='footer' className='footer'>
                <div className="footer__wrapper-links">
                    
                    <div className="links-icon">
                        <a> <img src="icons/social/mail.png" alt="email" style={{'width': '30px', 'height': '30px'}}/> smollinazar3000@gmail.com</a>
                    </div>
                    
                    <div className="links-icon">
                        <a rel='noreferrer' target={'_blank'} href="https://github.com/SmoliiNazar"> <img src="icons/social/githubSmall.svg" alt="github"/> Github</a>
                    </div>
                    
                    <div className="links-icon">
                        <a rel='noreferrer' target={'_blank'} href="https://www.facebook.com/profile.php?id=100083070131958"> <img src="icons/social/facebook_straight.svg" alt="facebook" /> Facebook</a>
                    </div>

                    <div className="links-icon">
                        <a> <img src="icons/social/telegram.svg" alt="telegram" /> @NazarJFD</a>
                    </div>
                    
                </div>
            </footer>
            <Menu active={menuActive} setActive={setMenuActive} items={items}/>
        </>
    )
}

export default App;