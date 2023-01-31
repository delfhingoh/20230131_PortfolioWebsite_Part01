const ProjectDetails = ({ project }) =>
{
    const BackgroundImg = 
    {
        backgroundImage: `url(${ project.thumbnail })`
    };

    return(
        <div className="project">
            <h4>{ project.title }</h4>
            <p className="project-skills">
                { project.skills.map((s) => s.title ? s.title + " " : s + " ") }</p>
            <p className="project-summary">{ project.summary }</p>    
            { project.link !== "" ? <button className="btn"><a href={ project.link }>More</a></button> : "" }
        
        </div>
    );
}

export default ProjectDetails;