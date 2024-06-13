'use client'
import InteractiveCard from "./InteractiveCard";
import Image from "next/image";
import { CoworkingJson, CoworkingItem } from "../../interface";
import Link from "next/link";


export default function RoomCard({coItem}: {coItem:CoworkingItem}){

    return (
        <div>
            <InteractiveCard contentName={coItem.name}>
                <div className="w-full h-[60%] relative rounded-t-lg">
                    <Image src={coItem.picture}
                    alt="imgcard"
                    fill={true}
                    objectFit='imgcard'
                    className="object-cover rounded-t-lg"/>
                </div>
                <div className="w-full h-[15%] p-[10px] mt-5 text-lg text-center">{coItem.name}</div>
                <div>{coItem.picture}</div>
                <div className="flex justify-center">
                    <Link href={`/rooms/${coItem.id}`}>
                        <button className='rounded-lg font-kanit bg-[#252645] h-[38px] w-[90px] m-5 px-3 py-0 text-white shadow-sm hover:bg-gradient-to-t from-[#1A2B3F] to-[#526D8E]' >
                            Reserve
                        </button>
                    </Link>
                </div>     
            </InteractiveCard>
        </div>   
    )
}