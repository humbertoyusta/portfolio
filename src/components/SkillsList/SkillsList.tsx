import styles from "./SkillsList.module.css";
import InnerSkillsList from "./InnerSkillsList";
import SkillCategoryType from "@/types/SkillCategoryType";

export default function SkillsList({
    skillCategories,
}: {
    skillCategories: SkillCategoryType[];
}) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.skills_title}>Skills</h2>
            <div className={styles.line_wrapper}>
                <div className={styles.line} />
            </div>
            <div className={styles.skills_list}>
                {skillCategories.map((category) => (
                    <div key={category.title}>
                        <div className={styles.skill_category}>
                            <div className={styles.category_name}>
                                <span>{category.title}</span>
                            </div>
                            <InnerSkillsList skills={category.skills} />
                        </div>
                        <div className={styles.line_wrapper}>
                            <div className={styles.line} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
