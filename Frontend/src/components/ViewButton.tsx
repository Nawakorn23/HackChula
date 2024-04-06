'use client'
import { useRef } from 'react';

export default function ViewButton(){

    const popupScreen = useRef<HTMLDivElement>(null)

    return(
        <div>
            <div className="flex flex-row-reverse">
                <button className="bg-[black] rounded-lg text-white px-7 py-2 absolute bottom-0 rigth-0 mr-5"
                onClick={(e) => {if (popupScreen.current) popupScreen.current.classList.toggle('hidden')}}>
                view</button>
            </div>

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 hidden" ref={popupScreen}>
                <div className="bg-white  py-2 px-8 pb-10  rounded-lg shadow-md mx-4">

                    <div className="flex flex-row-reverse">
                        <button className="z-70 text-[#919191] mt-2 text-xl" onClick={(e) => {if (popupScreen.current) popupScreen.current.classList.toggle('hidden')}}>
                            x
                        </button>
                    </div>

                    <div className="text-2xl font-bold">Information</div>

                    <div className='text-[#919191] text-sm 	'>_______________________________________________________</div>
                    <div className='mt-4' >Study room: Stu2 คุณศริริวัฒน์ วงศ์จารถกร วศ. 2529</div>
                    <div className='mt-4'>เวลา: 16:37 - 16:45</div>
                    <div className='mt-4'>เบอร์โทรศัพท์ : 0XX-XXX-XXXX</div>
                    <div className='mt-4'>รหัสนิสิตที่ใช้จองห้อง</div>
                    <div>
                        <div>6XXXXXXX21</div>
                        <div>6XXXXXXX21</div>
                        <div>6XXXXXXX21</div>
                        <div>6XXXXXXX21</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
