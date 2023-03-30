import PositionType from "@/types/PositionType";
import styles from "@/components/Experience/Position/Position.module.css";

export default function Position({ position }: { position: PositionType }) {
    return (
        <div className={styles.experience}>
            <h3>
                <span className={styles.title}>
                    {position.title} {position.company ? <>&mdash;</> : ""}
                </span>
                <span className={styles.subtitle}>{position.company}</span>
            </h3>
            <h5 className={styles.subheader}>
                {position.startDate} - {position.endDate} | {position.city}
                {position.country ? ", " : ""}
                {position.country}
            </h5>
            <ul className={styles.text_wrapper}>
                {position.description.map((text, index) => (
                    <li key={index} className={styles.text}>
                        {text}
                    </li>
                ))}
            </ul>
            <div className={styles.line_wrapper}>
                <div className={styles.line} />
            </div>
        </div>
    );
}
