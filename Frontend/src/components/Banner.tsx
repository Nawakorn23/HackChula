"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import getUsers from '@/libs/getUsers';
import { getServerSession } from 'next-auth';
import getUserProfile from '@/libs/getUserProfile';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

import { motion } from 'framer-motion';
import AlertBox from './SucceedBox';

export default function Banner() {
    const covers = ['/img/library.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    const { data: session } = useSession()

    return (
        <div className={styles.banner}>
            <Image src={covers[0]}
                alt='cover'
                fill={true}
                objectFit='cover' />

            <div className={styles.backgroundtexture}></div>

            <div className='flex justify-center items-center w-full h-full'>
                <div className={styles.bannerText}>
                    <div className={styles.box}>
                        <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo'
                            width={0} height={0} sizes='80vh' />
                        <div className={styles.text}>Chulalongkorn University </div>
                        <div className={styles.text}>Engineering Library</div>
                        <br />
                        <div>
                            <div className={styles.line}></div>
                        </div>
                        <Link href={'/room'}>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                className={styles.button}
                            >
                                Reserve study room
                            </motion.button>
                        </Link>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}