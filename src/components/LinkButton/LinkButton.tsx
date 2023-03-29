import styles from "./LinkButton.module.css";

interface ILinkButtonProps {
    link: string;
    children: React.ReactNode;
}

export default function LinkButton({ link, children }: ILinkButtonProps) {
    return (
        <a href={link} className={styles.button}>
            {children}
        </a>
    );
}
