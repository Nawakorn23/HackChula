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
                <div className="bg-white p-8 rounded-lg shadow-md mx-4">
                    <div className="text-2xl font-bold">Information</div>
                    <div>____________________________________________</div>
                    <div className='mt-4'>Study room: Stu2 คุณศริริวัฒน์ วงศ์จารถกร วศ. 2529</div>
                    <div className='mt-4'>เวลา: 16:37 - 16:45</div>
                    <div className='mt-4'>เบอร์โทรศัพท์ : 0XX-XXX-XXXX</div>
                    <div className='mt-4'>รหัสนิสิตที่ใช้จองห้อง</div>
                    <div>
                        <div>6XXXXXXX21</div>
                        <div>6XXXXXXX21</div>
                        <div>6XXXXXXX21</div>
                        <div>6XXXXXXX21</div>
                    </div>
                    <div className='space-x-4 flex justify-end'>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={(e) => {if (popupScreen.current) popupScreen.current.classList.toggle('hidden')}}>
                        Close
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}


//     const popupScreen = useRef<HTMLDivElement>(null)

//     const [ vwBtn, setViewBtn ] = useState<boolean>(true);


//     const popup = {
                
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden" ref={popupScreen}>
//             <div className="bg-white p-8 rounded-lg shadow-md mx-4">
//                     <div className="text-2xl font-bold mb-4">Information</div>
//                     <div>________________</div>
//                     <div>Study room : Stu2 คุณศริริวัฒน์ วงศ์จารถกร วศ. 2529</div>
//                     <div>เวลา:16:37 - 16:45</div>

//                     <div>เบอร์โทรศัพท์ : 0XX-XXX-XXXX</div>

//                     <div>รหัสนิสิตที่ใช้จองห้อง</div>
//                     <div>
//                         <div>6XXXXXXX21</div>
//                         <div>6XXXXXXX21</div>
//                         <div>6XXXXXXX21</div>
//                         <div>6XXXXXXX21</div>
//                     </div>

//                     <div className='space-x-4 flex justify-end'>
//                         <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={(e) => {if (popupScreen.current) popupScreen.current.classList.toggle('hidden')}}>
//                         Close
//                         </button>
//                     </div>
//             </div>
//         </div>        

//     }


//     // const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
//     //     e.preventDefault();

//     //     try {
//     //         setViewBtn(true);
//     //     } catch (error) {
//     //         console.error(error);
//     //         alert("Failed to update booking")
//     //     }
//     // };

// //     <div className="flex flex-row-reverse">
// //     <button className="bg-[black] rounded-lg text-white px-7 py-2 absolute bottom-0 rigth-0 mr-5"
// //     onClick={() => {
// //         if (popupScreen.current) {
// //             popupScreen.current.classList.toggle('hidden');
// //         }
// //     }}
// //     >
// //     view
// //     </button>
// // </div>


//     return (

//     )
// }