import Link from "next/link";
import RoomCard from "./RoomCard";
import { CoworkingJson, CoworkingItem } from "../../interface";

export default async function RoomCatalog({coJson}: {coJson:Promise<CoworkingJson>}){
    const coJsonReady = await coJson;

    return (
        <>
        <div className="flex justify-center">
            <div className="flex my-10 text-[20px] font-khula font-medium border-2 rounded-2xl border-[#D2353C] py-2 w-[1000px] justify-center">
                <div className="mx-[100px]">Semina Room</div>
                <div className="mx-[100px]">Study Room</div>
                <div className="mx-[100px]" >The Box</div>
            </div>
        </div>
        
        <div  style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", 
            justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    coJsonReady.data.map((coItem:CoworkingItem) => (
                        <Link href={`/rooms/${coItem.id}`} className="w-1/5 m-5">
                            <RoomCard cardName={coItem.name} imgSrc='/img/semina.png'/>
                        </Link>
                    ))
                }
        </div>
        </>
    )
}