"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import ActualNavbar from "@/components/Navbar/ActualNavbar";

const navbarItems = [
    {
        name: "ABOUT",
        href: "#about",
    },
    {
        name: "EXPERIENCE",
        href: "#experience",
    },
    {
        name: "PROJECTS",
        href: "#projects",
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
            />
            {visible && (
                <ActualNavbar
                    classNames={`${styles.header} ${styles.fixed}`}
                    ref={containerRef}
                    menuIcon={menuIcon}
                    toggleMenu={toggleMenu}
                    menuClass={menuClass}
                    navbarItems={navbarItems}
                />
            )}
        </>
    );
}
