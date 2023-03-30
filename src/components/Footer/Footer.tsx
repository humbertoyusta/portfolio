import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.icon_list}>
                <a
                    href="https://github.com/humbertoyusta"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub className={styles.icon} />
                </a>
                <a
                    href="https://www.linkedin.com/in/humberto-yusta-g%C3%B3mez-036710212/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className={styles.icon} />
                </a>
                <a href="mailto:humbertoyusta02@gmail.com" aria-label="Email">
                    <FaEnvelope className={styles.icon} />
                </a>
            </div>
        </footer>
    );
}
