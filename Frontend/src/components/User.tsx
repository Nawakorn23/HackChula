// import { AppDispatch, useAppSelector } from "@/redux/store"
// import { useDispatch } from "react-redux"
// import { removeReservation } from "@/redux/features/cartSlice"
import { UserJson , UserItem } from "../../interface"

export default async function Users({reserveJson}: {reserveJson: Promise<UserJson>}){
    
    const reserveJsonReady = await reserveJson
    // const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            reserveJsonReady.data.map((User:UserItem)=>(
                <div className="bg-slate-200 rounded-lg mx-5 py-2 my-2 text-[#000000]" key={User._id}>
                        <div className="text-xl mx-2">Name: {User.name}</div>
                        <div className="text-sm mx-2">Email: {User.email}</div>
                        <div className="text-sm mx-2">Role: {User.role}</div>
                </div>
            ))
        }
        </>
    )
}

//Component