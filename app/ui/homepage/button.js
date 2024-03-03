'use client';
import { motion } from "framer-motion"

function ButtonComponent({ content,style }) {
    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={style}>
                {content}
            </motion.button>
        </>
    )
}

export default ButtonComponent;