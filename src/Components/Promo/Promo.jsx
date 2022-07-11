import { Link } from 'react-scroll';

import './promo.scss'
import '../style/button.scss'
import '../style/title.scss'

const Promo = () => {
    return (
        <section id='promo' className="promo">
        <div className="container">
            <div className="title title_fz16 promo__subtitle">My name is Nazar Smolii</div>
            <h1 className="title title_fz48 promo__title">I am an web-developer from Novyi Rozdil</h1>
            <div className="promo__btns">
                <Link to='works' smooth={true} offset={50} duration={1500} className="btn-flip" data-back="works" data-front="My"></Link>
                <Link to='about' smooth={true} offset={50} duration={1500} className="anim">About me</Link>
            </div>
        </div>

    </section>
    )
}

export default Promo;