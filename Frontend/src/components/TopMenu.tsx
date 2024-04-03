import TopMenuItem from "./TopMenuItem"
import styles from './topmenu.module.css'
import { getServerSession } from "next-auth";
import { Link } from "@mui/material";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu() {
    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo'
                    width={0} height={0} sizes='100vh'/>
                </Link>
                <TopMenuItem  title="Reserve Room" pageRef="/room-reserve"/>
                <TopMenuItem  title="E-Books" pageRef="/ebooks"/>
                <TopMenuItem  title="News" pageRef="/news"/>
                <TopMenuItem  title="Books" pageRef="/about/books"/>
                <TopMenuItem  title="Study Space" pageRef="/about/study-space"/>
                <TopMenuItem  title="About" pageRef="/about"/>
            </div>
            <div className='flex flex-row absolute right-0 h-[50%] items-center'>
                <TopMenuItem title="Login" pageRef="/login" />
                <Link href="/signup">
                    <button className="rounded-lg bg-[#CC1933] h-[40px] w-[100px] font-bold mx-5 my-0 px-3 py-0 text-lg text-white shadow-sm hover:bg-gradient-to-t from-[#92141A] to-[#D2353C]">Sign up</button>
                </Link>
            </div>

        </div>
    )
}