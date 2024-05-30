import InteractiveCard from "./InteractiveCard";
import Image from "next/image";

export default function RoomCard({cardName, imgSrc}: {cardName:string, imgSrc:string}){
    return (
        <InteractiveCard contentName={cardName}>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt="imgcard"
                fill={true}
                objectFit='imgcard'
                className="object-cover rounded-t-lg"/>
            </div>
            <div className="w-full h-[15%] p-[10px] mt-5 text-lg text-center">{cardName}</div>
        </InteractiveCard>
    )

}