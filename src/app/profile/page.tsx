import DataReserve from "@/components/DateReserve";
import TextField from '@mui/material/TextField';
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import React from 'react';
import Link from 'next/link';


export default async function Profile({ params }: { params: { cid: string } }) {
    //    console.log()


    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createAt = new Date(profile.data.createAt)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4" >
            <div className="text-4xl text-blue-950 font-medium">Profile</div>

            <div className="text-2xl text-blue-950 font-medium">{profile.data.name}</div>

            <table className="table-auto border-separate border-spacing-2 border-blue-950">
                <tbody className="block outline outline-offset-4 rounded-md border-blue-950">
                    <tr>
                        <td className="font-medium">Email</td>
                        <td>{profile.data.email}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">Tel.</td>
                        <td>{profile.data.tel}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">Role</td>
                        <td>{profile.data.role}</td>
                    </tr>
                    <tr>
                        <td className="font-medium">Member Since</td>
                        <td>{createAt.toString()}</td>
                    </tr>
                </tbody>

            </table>

            
            <Link href="/updateuserprofile">
                <button className="bg-blue-950 text-white font-bold py-2 px-4 rounded">Update Profile</button>
            </Link>

            <div>
                <Link href="/users">
                    <button className="bg-blue-950 text-white font-bold py-2 px-4 rounded">All Users</button>
                </Link>
                </div>
        </main>
    );
}
