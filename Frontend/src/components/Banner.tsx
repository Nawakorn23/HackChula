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

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
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
            
            <div className='flex flex-row w-[50%] h-[60%]'>
                    
                <div className={styles.bannerText}>
                    <div className={styles.box}>
                        <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo'
                        width={0} height={0} sizes='100vh'/>
                        <div>Chulalongkorn University </div>
                        <div>Engineering Library</div>
                        
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}