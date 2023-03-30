import styles from "@/components/Navbar/Navbar.module.css";
import React from "react";

interface INavbarItemProps {
    classNames: string;
    menuIcon: JSX.Element;
    toggleMenu: () => void;
    menuClass: string;
    navbarItems: { name: string; section: string }[];
    scrollToSection: (id: string) => void;
}

const ActualNavbar = (
    {
        classNames,
        menuIcon,
        toggleMenu,
        menuClass,
        navbarItems,
        scrollToSection,
    }: INavbarItemProps,
    ref: React.Ref<HTMLDivElement>
) => {
    return (
        <div className={classNames} ref={ref}>
            <h2
                className={styles.name}
                onClick={() => scrollToSection("welcome")}
            >
                Humberto Yusta
            </h2>
            <button className={styles.menu_button} onClick={toggleMenu}>
                {menuIcon}
            </button>
            <ul className={menuClass}>
                {navbarItems.map((item) => (
                    <li
                        className={styles.menu_item}
                        key={item.name}
                        onClick={() => scrollToSection(item.section)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.forwardRef(ActualNavbar);
