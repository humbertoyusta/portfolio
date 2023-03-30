import styles from "./Projects.module.css";
import Project from "@/components/Projects/Project";
import ProjectType from "@/types/ProjectType";

interface IProjectsProps {
    projects: ProjectType[];
}

export default function Projects({ projects }: IProjectsProps) {
    return (
        <div className={styles.wrapper} id="projects">
            <h2 className={styles.projects_title}>Projects</h2>
            <div className={styles.projects_list}>
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        photo={project.photo?.url}
                        github_link={project?.githubLink}
                        tags={project.tags}
                    />
                ))}
            </div>
        </div>
    );
}
