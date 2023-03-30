"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import ActualNavbar from "@/components/Navbar/ActualNavbar";

const navbarItems = [
    {
        name: "ABOUT",
        section: "about",
    },
    {
        name: "EXPERIENCE",
        section: "experience",
    },
    {
        name: "PROJECTS",
        section: "projects",
    },
    {
        name: "SKILLS",
        section: "skills",
    },
];

export default function Navbar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingUp = currentScrollPos < prevScrollPos;

            if (currentScrollPos >= window.innerHeight && isScrollingUp) {
                if (!visible) setVisible(true);
            } else {
                if (visible) setVisible(false);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, visible]);

    const [showMenu, setShowMenu] = useState(false);

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const menuIcon = showMenu ? <FaTimes /> : <FaBars />;
    const menuClass = `${styles.menu} ${showMenu ? styles.show : ""}`;

    return (
        <>
            <ActualNavbar
                classNames={styles.header}
                ref={containerRef}
                menuIcon={menuIcon}
                toggleMenu={toggleMenu}
                menuClass={menuClass}
                navbarItems={navbarItems}
                scrollToSection={scrollToSection}
            />
            {visible && (
                <ActualNavbar
                    classNames={`${styles.header} ${styles.fixed}`}
                    ref={containerRef}
                    menuIcon={menuIcon}
                    toggleMenu={toggleMenu}
                    menuClass={menuClass}
                    navbarItems={navbarItems}
                    scrollToSection={scrollToSection}
                />
            )}
        </>
    );
}
