import styles from "@/components/Navbar/Navbar.module.css";
import React from "react";

interface INavbarItemProps {
    classNames: string;
    menuIcon: JSX.Element;
    toggleMenu: () => void;
    menuClass: string;
    navbarItems: { name: string; href: string }[];
}

const ActualNavbar = (
    {
        classNames,
        menuIcon,
        toggleMenu,
        menuClass,
        navbarItems,
    }: INavbarItemProps,
    ref: React.Ref<HTMLDivElement>
) => {
    return (
        <div className={classNames} ref={ref}>
            <h2 className={styles.name}>Humberto Yusta</h2>
            <button className={styles.menu_button} onClick={toggleMenu}>
                {menuIcon}
            </button>
            <ul className={menuClass}>
                {navbarItems.map((item) => (
                    <li className={styles.menu_item} key={item.name}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.forwardRef(ActualNavbar);
