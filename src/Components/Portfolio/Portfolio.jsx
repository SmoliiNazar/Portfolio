import './portfolio.scss'

const Portfolio = ({data}) => {
    return (
        <section id='works' class="portfolio">
            <div class="container">
                <h2 class="title title_fz16 title__section-title">Portfolio</h2>
                <div class="title title_fz36 title__section-subtitle">My works</div>
                <div class="divider"></div>

                <div class="portfolio__wrapper">
                    {data.map(item => 
                        <a href={item.href} className={item.classes}>
                            <img src={item.image} alt={item.alt} />
                        </a>    
                    )}
                </div>
            </div>
        </section>
    )
}
export default Portfolio;