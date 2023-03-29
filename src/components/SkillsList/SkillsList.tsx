import styles from "./SkillsList.module.css";
import InnerSkillsList from "./InnerSkillsList";

interface SkillCategory {
    category: string;
    skills: string[];
}

export default function SkillsList() {
    const skills: SkillCategory[] = [
        {
            category: "Programming Languages",
            skills: [
                "TypeScript",
                "JavaScript",
                "PHP",
                "Java",
                "C++",
                "Python",
                "SQL",
                "GraphQL",
                "HTML",
                "CSS",
            ],
        },
        {
            category: "Frameworks",
            skills: ["React", "Next.js", "Laravel", "Nest.js"],
        },
        {
            category: "Tools",
            skills: [
                "Git",
                "Docker",
                "JetBrains IDEs",
                "VS Code",
                "Postman",
                "Gitlab Runner",
                "Gitlab CI/CD Pipelines",
            ],
        },
        {
            category: "Languages",
            skills: ["Fluent English", "Native Spanish"],
        },
    ];

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.skills_title}>Skills</h2>
            <div className={styles.line_wrapper}>
                <div className={styles.line} />
            </div>
            <div className={styles.skills_list}>
                {skills.map((category) => (
                    <>
                        <div
                            key={category.category}
                            className={styles.skill_category}
                        >
                            <div className={styles.category_name}>
                                <span>{category.category}</span>
                            </div>
                            <InnerSkillsList skills={category.skills} />
                        </div>
                        <div className={styles.line_wrapper}>
                            <div className={styles.line} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
