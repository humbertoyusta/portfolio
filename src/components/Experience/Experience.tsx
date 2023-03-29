import styles from "./Experience.module.css";

export default function Experience() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.experience_wrapper}>
                <h2 className={styles.experience_title}>Experience</h2>
                <div className={styles.line_wrapper}>
                    <div className={styles.line} />
                </div>
                <div className={styles.experience}>
                    <h3>
                        <span className={styles.title}>
                            Full Stack Developer &mdash;
                        </span>
                        <span className={styles.subtitle}>Leagues of Code</span>
                    </h3>
                    <h5 className={styles.subheader}>
                        MARCH 2023 - PRESENT | Barcelona, Spain
                    </h5>
                    <ul className={styles.text_wrapper}>
                        <li className={styles.text}>
                            As a Full Stack Developer at Leagues of Code, I have
                            refined my expertise in Laravel, GraphQL, Next.js,
                            and React.js, delivering seamless web solutions and
                            fostering a collaborative team atmosphere.
                        </li>
                    </ul>
                    <div className={styles.line_wrapper}>
                        <div className={styles.line} />
                    </div>
                </div>
                <div className={styles.experience}>
                    <h3>
                        <span className={styles.title}>
                            Back End Developer &mdash;
                        </span>
                        <span className={styles.subtitle}>Leagues of Code</span>
                    </h3>
                    <h5 className={styles.subheader}>
                        SEPTEMBER 2022 - MARCH 2023 | Barcelona, Spain
                    </h5>
                    <ul className={styles.text_wrapper}>
                        <li className={styles.text}>
                            As a Back End Developer intern, committed to deliver
                            high-quality results, I gained valuable experience
                            in MySQL, Object-Oriented Programming (OOP), PHP,
                            Laravel, and Back-end development.
                        </li>
                    </ul>
                    <div className={styles.line_wrapper}>
                        <div className={styles.line} />
                    </div>
                </div>
                <div className={styles.experience}>
                    <h3>
                        <span className={styles.title}>
                            Competitive Programmer
                        </span>
                    </h3>
                    <h5 className={styles.subheader}>
                        2018 - PRESENT | Achievements:
                    </h5>
                    <ul className={styles.text_wrapper}>
                        <li className={styles.text}>
                            Bronze medal at the International Olympiad in
                            Informatics (IOI 2020) and best Latin-American
                            score.
                        </li>
                        <li className={styles.text}>
                            Grandmaster at codeforces.
                        </li>
                        <li className={styles.text}>
                            Gold medal (3rd place), Bronze medal, and Silver
                            medal at the Ibero-American Competition in
                            Informatics(CIIC) 2020, 2019 and 2018 respectively
                        </li>
                    </ul>
                    <div className={styles.line_wrapper}>
                        <div className={styles.line} />
                    </div>
                </div>
                <div className={styles.experience}>
                    <h3>
                        <span className={styles.title}>
                            Programming Teacher &mdash;
                        </span>
                        <span className={styles.subtitle}>Leagues of Code</span>
                    </h3>
                    <h5 className={styles.subheader}>
                        SEPTEMBER 2022 - PRESENT | Barcelona, Spain
                    </h5>
                    <ul className={styles.text_wrapper}>
                        <li className={styles.text}>
                            Teaching an introduction to competitive programming
                            course in C++ to students interested in Spanish
                            Informatics Olympiad.
                        </li>
                        <li className={styles.text}>
                            Teaching an introduction to programming course in
                            Python at Saint Paul School.
                        </li>
                    </ul>
                    <div className={styles.line_wrapper}>
                        <div className={styles.line} />
                    </div>
                </div>
            </div>
        </div>
    );
}
