import React, { useState } from 'react';
import styles from './failedbox.module.css';
import { motion } from 'framer-motion';

export default function FailedBox({ header, message }: { header: string, message: string }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            {isVisible && (
                <div className={styles.card}>
                    <button className={styles.dismiss} type="button" onClick={handleDismiss}>×</button>
                    <div className={styles.header}>
                        <div className={styles.image}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 6L18 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className={styles.content}>
                            <span className={styles.title}>{header}</span>
                            <p className={styles.message}>{message}</p>
                        </div>
                        <br />
                        <motion.div className={styles.actions} whileHover={{ scale: 1.05 }}>
                            <button className={styles.dimiss2} type="button" onClick={handleDismiss}>Dismiss</button>
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    );
}
