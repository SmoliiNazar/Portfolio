import './skills.scss';

const Skills = ({mySkills}) => {

    return(
        <section id='skills' class="skills">
        <div class="container">
            <h2 class="title title_fz16 title__section-title">Skills</h2>
            <div class="title title_fz36 title__section-subtitle">What do I use while studying</div>
            <div class="divider"></div>

            <div class="skills__items">
                {mySkills.map(skill => 
                    <div class="skills__item">
                        <div class="skills__item-img">
                            <img src={`icons/skills/${skill.img}`} alt={skill.alt}/>
                        </div>
                        <h3 class="title title_fz14">{skill.header}</h3>
                        <p>{skill.descr}</p>
                    </div>
                )}
            </div>
        </div>
    </section>
    )
}
export default Skills;