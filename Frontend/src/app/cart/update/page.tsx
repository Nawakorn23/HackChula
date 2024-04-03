'use client'
import DateReserve from "@/components/DateReserve"
import TimeReserve from "@/components/TimeReserve"
import updateReservation from "@/libs/updateReservation"
import { Dayjs } from "dayjs"
import { useSession } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function UpdateReservationPage(){
    const router = useRouter()

    const urlParams = useSearchParams()
    const id = urlParams.get('id')
    const start = urlParams.get('startTime')
    const end = urlParams.get('endTime')

    const {data:session} = useSession()

    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [startTime, setStartTime] = useState<Dayjs|null>(null)
    const [endTime, setEndTime] = useState<Dayjs|null>(null)

    const updateReserve = ()=>{
        if(!session || !session.user.token) return

        if(pickupDate && startTime && endTime){
            const item: any = {
                reserveId: id,
                reserveDateStart: pickupDate.set('hour', startTime.hour()+7).set('minute', startTime.minute()).set('second', startTime.second()).toISOString(),
                reserveDateEnd: pickupDate.set('hour', endTime.hour()+7).set('minute', endTime.minute()).set('second', endTime.second()).toISOString()
            }

            console.log(item)

            updateReservation(session.user.token, item)
            .then((data) => {
                console.log(data)
                // alert("Success")
                router.push('/cart')
                router.refresh()
            })
            .catch((err) => {
                console.log(err.message)
                alert(err.message)
            })
            
        }
    }
    
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Update Reservation</div>

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600 m-3">Pick-Up Date</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setPickupDate(value)}}/>

                <div className="text-md text-left text-gray-600 m-3">Start Time</div>
                <TimeReserve onDateChange={(value:Dayjs)=>{setStartTime(value)}}/>

                <div className="text-md text-left text-gray-600 m-3">End Time</div>
                <TimeReserve onDateChange={(value:Dayjs)=>{setEndTime(value)}}/>
            </div>

            <button className="block rounded-md bg-rose-400 hover:bg-pink-700 px-3 py-2 text-white shadow-sm"
            onClick={updateReserve}>
                Update Reserve
            </button>
        </main>
    )
}