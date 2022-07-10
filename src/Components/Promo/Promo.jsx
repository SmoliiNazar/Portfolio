import { Link } from 'react-scroll';

import './promo.scss'
import '../style/button.scss'
import '../style/title.scss'

const Promo = () => {
    return (
        <section id='promo' class="promo">
        <div class="container">
            <div class="title title_fz16 promo__subtitle">My name is Nazar Smolii</div>
            <h1 class="title title_fz48 promo__title">I am an web-developer from Novyi Rozdil</h1>
            <div class="promo__btns">
                <Link to='works' smooth={true} offset={50} duration={1500} class="btn-flip" data-back="works" data-front="My"></Link>
                <Link to='about' smooth={true} offset={50} duration={1500} class="anim">About me</Link>
            </div>
        </div>

    </section>
    )
}

export default Promo;