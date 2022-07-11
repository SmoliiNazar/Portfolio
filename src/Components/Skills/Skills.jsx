import './skills.scss';

const Skills = ({mySkills}) => {

    return(
        <section id='skills' className="skills">
        <div className="container">
            <h2 className="title title_fz16 title__section-title">Skills</h2>
            <div className="title title_fz36 title__section-subtitle">What do I use while studying</div>
            <div className="divider"></div>

            <div className="skills__items">
                {mySkills.map(skill => 
                    <div key={skill.id} className="skills__item">
                        <div className="skills__item-img">
                            <img src={`icons/skills/${skill.img}`} alt={skill.alt}/>
                        </div>
                        <h3 className="title title_fz14">{skill.header}</h3>
                        <p>{skill.descr}</p>
                    </div>
                )}
            </div>
        </div>
    </section>
    )
}
export default Skills;