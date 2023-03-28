"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./ScrollArrow.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function ScrollArrow() {
    const handleClick = useCallback(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    }, []);

    return (
        <motion.div
            className={styles.scroll_arrow}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            onClick={handleClick}
        >
            <AiOutlineArrowDown className={styles.scroll_arrow_icon} />
            <span className={styles.scroll_arrow_text}>Scroll</span>
        </motion.div>
    );
}
