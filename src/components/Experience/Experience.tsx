import styles from "./Experience.module.css";
import { sdk } from "@/graphql/client";
import Position from "@/components/Experience/Position";

export default async function Experience() {
    const { positions } = await sdk.getPositions();

    return (
        <div className={styles.wrapper}>
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
