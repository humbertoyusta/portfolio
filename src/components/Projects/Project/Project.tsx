import styles from "./Project.module.css";
import Image from "next/image";

interface IProjectProps {
    title: string;
    description: string;
    photo: string;
    github_link: string;
    tags: string[];
}

export default function Project({
    title,
    description,
    photo,
    github_link,
    tags,
}: IProjectProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.photo_wrapper}>
                <Image src={photo} alt={title} fill sizes="100%" />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <ul className={styles.tag_list}>
                    {tags.map((tag) => (
                        <li key={tag} className={styles.tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
                {/*<LinkButton href={github_link}>Github Repo</LinkButton>*/}
            </div>
        </div>
    );
}
