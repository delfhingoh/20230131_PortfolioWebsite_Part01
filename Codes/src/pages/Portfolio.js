import React, { useState } from 'react';
import { Projects, Filters } from '../Data';
import ProjectDetails from '../components/ProjectDetails';

const Portfolio = () =>
{
    const [ projects, setProjects ] = useState(Projects);
    const [ filter, setFilter ] = useState(Filters[0]);

    const handleFilter = (filter) =>
    {
        setFilter(filter);

        let filtered = Projects.filter((project) => project.filter.includes(filter));
        setProjects(filtered);
    }

    return(
        <section className="container" id="portfolio-section">
            <h1>Projects</h1>
            <div id="filters">
                {
                    Filters.map((f) => 
                    {
                        return <button className={ filter === f ? "fitlerBtn active" : "filterBtn" } key={f} type="button" onClick={() => handleFilter(f) }>{ f }</button>
                    })
                }
            </div>
            <div id="projects">
                {
                    projects.length > 0 
                    ?
                        projects.map((project) => 
                        {
                            return <ProjectDetails key={project.id} project= { project } />
                        }) 
                    :
                        <p className="no-projects">No projects? Don't worry! Things are happening behind the scenes.</p>
                }
            </div>
        </section>
    );
}

export default Portfolio;