import styles from "./AboutMe.module.css";
import Image from "next/image";
import AboutMeType from "@/types/AboutMeType";

export default function AboutMe({ aboutMe }: { aboutMe: AboutMeType }) {
    return (
        <div className={styles.wrapper} id="about">
            <div className={styles.content_wrapper}>
                <h2 className={styles.title}>{aboutMe.introQuote}</h2>
                {aboutMe.paragraphs.map((paragraph, index) => (
                    <p key={index} className={styles.text}>
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className={styles.image_wrapper}>
                <Image
                    src={aboutMe.photo.url}
                    alt={"Personal photo"}
                    fill
                    sizes="100%"
                />
            </div>
        </div>
    );
}
