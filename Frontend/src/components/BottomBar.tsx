import TopMenuItem from "./TopMenuItem"
import styles from './bottombar.module.css'
import { getServerSession } from "next-auth";
import { Link } from "@mui/material";
import Image from "next/image";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu() {
    const session = await getServerSession(authOptions)

    return (
        <div className={styles.bottombarcontainer}>
            <div className="flex flex-row items-center">
                <TopMenuItem title="bottom bar ??" pageRef="/" />
            </div>
        </div>
    )
}