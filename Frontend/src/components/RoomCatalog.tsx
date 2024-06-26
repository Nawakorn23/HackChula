'use client'
import RoomCard from "./RoomCard";
import { CoworkingJson, CoworkingItem } from "../../interface";
import { useState, useEffect } from "react";

export default function RoomCatalog({ coJson }: { coJson: Promise<CoworkingJson> }) {
    const [coJsonReady, setCoJsonReady] = useState<CoworkingJson | null>(null);
    const [selectedRoom, setSelectedRoom] = useState<string>('Seminar room');

    useEffect(() => {
        const fetchData = async () => {
            const data = await coJson;
            setCoJsonReady(data);
        };
        fetchData();
    }, [coJson]);

    if (!coJsonReady) return <div>Loading...</div>;

    const filteredRooms = coJsonReady.data.filter((coItem: CoworkingItem) => coItem.type === selectedRoom);

    return (
        <>
            <div className="flex justify-center">
                <div className="flex my-10 text-[20px] font-khula font-medium border-2 rounded-3xl border-[#D2353C] py-2 w-[1000px] justify-center">
                    <div className={`mx-[100px] ${selectedRoom === 'Seminar room' ? 'bg-red-500' : 'bg-[#F9F9F9]'}`} onClick={() => {setSelectedRoom('Seminar room'); }}>Seminar Room</div>
                    <div className={`mx-[100px] ${selectedRoom === 'Study room' ? 'bg-red-500' : 'bg-[#F9F9F9]'}`} onClick={() => {setSelectedRoom('Study room'); }}>Study Room</div>
                    <div className={`mx-[100px] ${selectedRoom === 'The box' ? 'bg-red-500' : 'bg-[#F9F9F9]'}`} onClick={() => {setSelectedRoom('The box'); }}>The Box</div>
                </div>
            </div>

            <div className="m-5 flex flex-wrap justify-around items-around">
                {
                    filteredRooms.map((coItem: CoworkingItem) => (
                        <div key={coItem.name} className="w-1/5 m-5 flex">
                            <RoomCard coItem={coItem} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}       
