import { useState } from "react";

const ProjectForm = () => 
{
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [skills, setSkills] = useState(["Test"]);
    const [filters, setFilters] = useState(["Website"]);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => 
    {
        e.preventDefault();

        const project = 
        {
            title,
            summary,
            skills,
            filters
        };

        const response = await fetch("/api/projects", 
        {
            method: "POST",
            body: JSON.stringify(project),
            header: 
            {
                "Content-Type": "application/json"
            }
        });

        const json = await response.json();

        if(!response.ok)
        {
            setError(json.error);
        }
        else
        {
            setTitle("");
            setSummary("");
            setSkills(["Test"]);
            setFilters(["Website"]);
            setError(null);
            console.log("New project added");
        }
    }

    return (
        <form className="create" onSubmit={ handleSubmit }>
            <h3>Add A New Project</h3>

            <label>Project Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Project Summary:</label>
            <input 
                type="text"
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
            />

            <button>Add Project</button>
            { error && <div className="error">{error}</div>}
        </form>
    );
}

export default ProjectForm;