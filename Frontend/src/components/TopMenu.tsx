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
            </div>
            <div className='flex flex-row absolute right-0 h-full'>
                <TopMenuItem  title="Login" pageRef="/login"/>
                <Link href="/signup">
                    <button className="rounded-full bg-[#A41F13] h-[50px] w-[100px] font-bold mx-5 my-4 px-3 py-2 text-lg text-white shadow-sm hover:bg-gradient-to-t from-[#92141A] to-[#D2353C]">Sign up</button>
                </Link>
            </div>
        </div>
    )
}