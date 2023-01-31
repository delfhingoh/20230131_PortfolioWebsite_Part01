import React from 'react';
import Quality from '../components/Quality';
import Skill from '../components/Skill';
import { Qualities, HardSkills } from '../Data';
import SleepingCatImg from '../images/sleeping_cat.png';

const About = () =>
{
    return(
        <section id="about-section">
            <article className="about-summary txt_white">
                <p>With a desire to learn new technologies beyond using content management systems in my previous position, I am pivoting myself to be a competent Full Stack Developer starting with Front End. Making ideas a reality is something I enjoy. My passion is <span class="txt_pink">creating products that make a positive difference</span> in people’s lives, starting with my own problem statements.</p>
            </article>
            <div className="about-qualities container">
                { 
                    Qualities.map((q) => <Quality key={q.id} quality={q} />)
                }
            </div>
            <div className="about-skills container">
                <figure className="quote">
                    <figcaption>"We can dream of it, we can hope for it, or we can make it happen."</figcaption>
                    <img src={ SleepingCatImg } alt="Sleeping cartoon cat." />
                </figure>
                <div className="skills">
                    {
                        HardSkills.map((skill) => 
                        {
                            return (<Skill key={skill.id} skill={skill} />);
                        })
                    }
                </div>
            </div>  
        </section>
    );
}

export default About;