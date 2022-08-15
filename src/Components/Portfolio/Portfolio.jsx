import './portfolio.scss'

const Portfolio = ({data}) => {
    return (
        <section id='works' className="portfolio">
            <div className="container">
                <h2 className="title title_fz16 title__section-title">Portfolio</h2>
                <div className="title title_fz36 title__section-subtitle">My works</div>
                <div className="divider"></div>

                <div className="portfolio__wrapper">
                    {data.map(item => 
                        <a rel='noreferrer' target={'_blank'} key={item.id} href={item.href} className={item.classes}>
                            <img src={item.image} alt={item.alt} />
                        </a>    
                    )}
                </div>
            </div>
        </section>
    )
}
export default Portfolio;