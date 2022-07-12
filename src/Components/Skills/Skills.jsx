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

            <div class="skills__ratings">
                <div class="skills__ratings-item">
                    <div class="title title_fz14 skills__ratings-title">HTML5</div>
                    <div class="skills__ratings-counter">100%</div>
                    <div class="skills__ratings-line">
                        <span style={{'width': '100%'}}></span>
                    </div>
                </div>
                <div class="skills__ratings-item">
                    <div class="title title_fz14 skills__ratings-title">CSS3/SCSS/SASS</div>
                    <div class="skills__ratings-counter">100%</div>
                    <div class="skills__ratings-line">
                        <span style={{'width': '100%'}}></span>
                    </div>
                </div>
                <div class="skills__ratings-item">
                    <div class="title title_fz14 skills__ratings-title">JavaScript</div>
                    <div class="skills__ratings-counter">90%</div>
                    <div class="skills__ratings-line">
                        <span style={{'width': '90%'}}></span>
                    </div>
                </div>
                <div class="skills__ratings-item">
                    <div class="title title_fz14 skills__ratings-title">React</div>
                    <div class="skills__ratings-counter">80%</div>
                    <div class="skills__ratings-line">
                        <span style={{'width': '80%'}}></span>
                    </div>
                </div>
                <div class="skills__ratings-item">
                    <div class="title title_fz14 skills__ratings-title">React + Redux</div>
                    <div class="skills__ratings-counter">40%</div>
                    <div class="skills__ratings-line">
                        <span style={{'width': '40%'}}></span>
                    </div>
                </div>
                <div class="skills__ratings-item">
                    <div class="title title_fz14 skills__ratings-title">TypeScript</div>
                    <div class="skills__ratings-counter">10%</div>
                    <div class="skills__ratings-line">
                        <span style={{'width': '10%'}}></span>
                    </div>
                </div>
            </div>
        </div>    
    </section>
    )
}
export default Skills;