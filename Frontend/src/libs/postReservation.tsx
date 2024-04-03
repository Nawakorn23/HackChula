import { ReservationItem } from "../../interface"

export default async function postReservation(token: string, reservationItem: any){
    const response = await fetch(`http://localhost:5000/api/v1/coworkings/${reservationItem.coworkingId}/reservations`, {
        method: "POST",
        headers: {            
            "authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            reserveDateStart: reservationItem.reserveDateStart,
            reserveDateEnd: reservationItem.reserveDateEnd
        })
    })

    const json = await response.json()

    if(!response.ok) {
        throw new Error(json.message); 
    }

    return json
}