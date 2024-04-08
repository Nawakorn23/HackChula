"use client"

import React, { useState } from 'react';
import styles from "./succeedbox.module.css";

import { motion } from 'framer-motion';

export default function AlertBox({ header, message }: { header: string, message: string }) {
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
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                                    <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">

                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div className={styles.content}>
                            <span className={styles.title}>{header}</span>
                            <p className={styles.message}>
                                {message}
                            </p>
                        </div>
                        <br />
                        <motion.div className={styles.actions} whileHover={{ scale: 1.05 }}>
                            <button className={styles.dimiss2} type="button" onClick={handleDismiss}>Dimiss</button>
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    );
}


// Example Ok Box Alert Message
//
// <div className={styles.content}>
//     <span className={styles.title}>Reservation Added</span>
//     <p className={styles.message}>
//         Reminder: You must check in within 20 minutes of the reserved time. Otherwise, your reservation will be cancelled.
//     </p>
// </div>