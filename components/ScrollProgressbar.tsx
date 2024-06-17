"use client"

import { useScroll, motion, useSpring, useTransform } from "framer-motion";

const ScrollProgressbar = () => {

    const { scrollYProgress } = useScroll();
    const scale = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 25,
    });

    const background = useTransform(
        scrollYProgress,
        [0, 1],
        ["#db7299", "#BB2649"]
    );

    return (
        <motion.div
            style={{
                scaleX: scale,
                transformOrigin: "left",
                background: background,
                position: "sticky",
                top: 0,
                width: "100%",
                height: "10px",
                borderRadius: "2px",
                zIndex: 9999,
            }}
        />
    )
}

export default ScrollProgressbar