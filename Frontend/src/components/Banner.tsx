'use client'
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

export default function Banner() {
    const covers = ['/img/library.jpg','/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data: session } = useSession()
    console.log(session)

    return (

        <div className={styles.banner} onClick={() => { setIndex(index + 1) }}>
            <Image src={covers[index % 3]}
                alt='cover'
                fill={true}
                objectFit='cover' />

            <div className={styles.backgroundtexture}></div>

            <div className='flex justify-center items-center w-full h-full'>
                <div className={styles.bannerText}>
                    <div className={styles.box}>
                        <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo'
                            width={0} height={0} sizes='100vh' />
                        <div className={styles.text}>Chulalongkorn University </div>
                        <div className={styles.text}>Engineering Library</div>
                        <br />
                        <div>
                            <div className={styles.line}></div>
                        </div>
                        <br />
                        <Link href={'/room-reserve'}>
                            <button className={styles.button}>
                                Reserve study room
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}