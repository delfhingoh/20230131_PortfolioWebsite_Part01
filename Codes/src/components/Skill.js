import React from "react";

const Skill = ({ skill }) => 
{
    const ScoreProgress = 
    {
        width: `${ skill.points }%`,
    }

    return(
        <div className="skill">
            <div className="skill-title">
                <p >{ skill.title }</p>
            </div>
            <div className="progress-base">
                <div className="progress " style={ ScoreProgress }></div>
            </div>
            <p  className="skill-points">{ skill.points + "%"}</p>
        </div>
    );
};

export default Skill;