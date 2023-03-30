import styles from "./Experience.module.css";
import Position from "@/components/Experience/Position";
import PositionType from "@/types/PositionType";

export default function Experience({
    positions,
}: {
    positions: PositionType[];
}) {
    return (
        <div className={styles.wrapper} id="experience">
            <div className={styles.experience_wrapper}>
                <h2 className={styles.experience_title}>Experience</h2>
                <div className={styles.line_wrapper}>
                    <div className={styles.line} />
                </div>
                {positions.map((position) => (
                    <Position position={position} key={position.id} />
                ))}
            </div>
        </div>
    );
}
