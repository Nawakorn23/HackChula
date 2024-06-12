import RoomCatalog from "@/components/RoomCatalog"
import getCards from "@/libs/getCards"
import { LinearProgress } from "@mui/material"
import { Suspense } from "react"

export default function Room() {
    const cos = getCards()

    return (
        <main className="text-center p-5 bg-[#F9F9F9]">            
            <h1 className="text-3xl font-bold font-khula">Engineering Library</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <RoomCatalog coJson={cos}/>
            </Suspense>            
        </main>
    )
}