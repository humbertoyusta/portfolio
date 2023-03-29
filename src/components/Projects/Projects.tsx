import styles from "./Projects.module.css";
import Project from "@/components/Projects/Project";

export default function Projects() {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.projects_title}>Projects</h2>
            <div className={styles.projects_list}>
                <Project
                    title="YOUTUBE SHARED PLAYLISTS"
                    description="React app that allows you to play videos, watch them together, and create and share playlists with your friends."
                    photo="/youtube-shared-playlists.png"
                    github_link="https://github.com/humbertoyusta/youtube-shared-playlists"
                    tags={[
                        "ReactJS",
                        "Styled Components",
                        "React Query",
                        "Socket io",
                    ]}
                />
                <Project
                    title="MOVIE LIST APP"
                    description="Next JS app that allows you create and edit playlists of
                    movies, using GraphQL"
                    photo="/movie-list-app.png"
                    github_link="https://github.com/humbertoyusta/movie-list-app"
                    tags={[
                        "NextJS",
                        "ReactJS",
                        "CSS Modules",
                        "GraphQL Request",
                    ]}
                />
                x
                <Project
                    title="LAUQUIZ"
                    description="Laravel app that allows you to create and solve quizzes,
                    it was working in production, including a payment system."
                    photo="/lauquiz.png"
                    github_link="https://github.com/humbertoyusta/lauquiz"
                    tags={["Laravel", "MySQL", "PHP", "PHPUnit Testing"]}
                />
            </div>
        </div>
    );
}
