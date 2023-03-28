import styles from "./Welcome.module.css";
import ScrollArrow from "@/components/ScrollArrow";

export default function Welcome() {
    return (
        <header className={styles.header}>
            <div key="top-part" className={styles.top_part}>
                <h1 className={styles.name}>HUMBERTO YUSTA</h1>
                <h2 className={styles.title}>Full Stack Developer,</h2>
            </div>
            <div key="bottom-part" className={styles.bottom_part}>
                <h2 className={styles.title}>Computer Science Student</h2>
                <p className={styles.slogan}>
                    Bringing your ideas to life with expert coding skills and a
                    passion for continuous learning.
                </p>
                <ScrollArrow />
            </div>
        </header>
    );
}
