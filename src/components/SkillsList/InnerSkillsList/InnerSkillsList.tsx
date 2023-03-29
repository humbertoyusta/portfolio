import styles from "./InnerSkillsList.module.css";

interface IInnerSkillsListProps {
    skills: string[];
}

export default function InnerSkillsList({ skills }: IInnerSkillsListProps) {
    return (
        <ul className={styles.inner_skills_list}>
            {skills.map((skill) => (
                <li key={skill} className={styles.skill}>
                    <span>{skill}</span>
                </li>
            ))}
        </ul>
    );
}
