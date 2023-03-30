import styles from "./AboutMe.module.css";
import Image from "next/image";

export default function AboutMe() {
    return (
        <div className={styles.wrapper} id="about">
            <div className={styles.content_wrapper}>
                <h2 className={styles.title}>Hello! I am Humberto Yusta</h2>
                <p className={styles.text}>
                    As a Computer Science Student at Harbour Space and a Full
                    Stack Developer at Leagues of Code, I have gained
                    proficiency in technologies like Laravel, GraphQL, NextJS,
                    and React.js.
                </p>
                <p className={styles.text}>
                    Passionate about competitive programming, I hold a bronze
                    medal from the International Olympiad in Informatics and
                    enjoy teaching programming while volunteering in the
                    community.
                </p>
            </div>
            <div className={styles.image_wrapper}>
                <Image
                    src={"/me.png"}
                    alt={"Humberto Yusta"}
                    fill
                    sizes="100%"
                />
            </div>
        </div>
    );
}
