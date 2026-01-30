import "./layout.css";
import { projects } from "../projects/projects";

export let Layout = ({ target, searchTerm }) => {
    if (!target) return null;

    const getProjectList = () => {
        if (target === "All") {
            const allProjects = Object.keys(projects)
                .filter(key => key !== "All")
                .flatMap(key => projects[key]);

            // REMOVE DUPLICATES: Keep only the first instance of a tool found
            return allProjects.filter((project, index, self) =>
                index === self.findIndex((p) => p.name === project.name)
            );
        } else {
            return projects[target] || [];
        }
    };

    const projectList = getProjectList();

    const filteredProjects = projectList.filter((project) => {
        if (!searchTerm) return true;
        const term = searchTerm.toLowerCase();
        return (
            project.name.toLowerCase().includes(term)
        );
    });

    return (
        <div className="project-dashboard">
            <h1 className="title">
                {target === "Estimator"
                    ? "Customer Support Tools"
                    : target
                        ? `${target} Tools`
                        : "All Projects"}
            </h1>

            <div className="project-card-grid">
                {filteredProjects.length === 0 ? (
                    <p>Nothing here yet. Try choosing something else</p>
                ) :

                    (
                        filteredProjects.map((project) => (
                            <div key={project.name} className="project-card">
                                <div className="project-card-header">
                                    <h3 className="project-card-title">{project.name}</h3>
                                    {target === "All" && (
                                        <p className="project-card-subtitle">{project.subtitle}</p>
                                    )}
                                </div>

                                <div className="project-card-body">
                                    <p>{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="proj-buttons"
                                    >
                                        Open
                                    </a>
                                </div>

                            </div>
                        ))
                    )}

            </div>
        </div>
    );
};

