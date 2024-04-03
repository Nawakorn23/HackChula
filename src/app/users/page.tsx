import Users from "@/components/User";
import getUsers from "@/libs/getUsers";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function UserPage(){
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return

    const users = getUsers(session.user.token)

    return (
        <main>
            <Users reserveJson={users}></Users>
        </main>
    )
}
//app