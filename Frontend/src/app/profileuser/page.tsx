import ViewButton from "@/components/ViewButton"

export default async function profileuser() {
    return (
        <div>
            <div className="text-center pt-10 text-3xl font-semibold">Status Points</div>
            <div className="text-center text-5xl pt-20 mb-20">100</div>
            <div className="text-center text-[#7B1318]">หากคะแนนต่ำกว่า 90 คะแนน จะไม่สามารถจองห้องประชุมได้เป็นเวลา 1 เดือน</div>
            
            <div className="p-9 mx-auto my-10 w-[65%] shadow-lg font-mono font-medium rounded-lg bg-[FFFFFF] flex flex-col items-left ">
                <div className="font-normal text-3xl">Nawakorn Kerdmatummai</div>
                <div className="text-[#919191]">Computer Engineering and Digital Technology</div>

                <div className="flex flex-row mt-10">
                    <div className="flex flex-col mr-10 ">
                        <div className="mb-3">Student ID</div>
                        <div className="mb-3">Email</div>
                        <div className="mb-3">Tel.</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-3">6XXXXXXX21</div>
                        <div className="mb-3">6XXXXXXX21@student.chula.ac.th</div>
                        <div className="mb-3">0XX-XXX-XXXX</div>
                    </div>
                </div>
            </div>

            <div className="p-9 mx-auto my-10 w-[65%] shadow-lg font-mono p-2 rounded-lg bg-[FFFFFF] flex flex-col items-left">
                <div>
                    <div className="flex flex-row justify-between">
                        <div className="font-semibold text-3xl">03 Mar 2024</div>
                        <div className="Right-to-left mr-10">Active</div>
                    </div>
                    <div className="relative">
                        <div className="mt-3">ชั้น 4 Study room Stu2 คุณศริริวัฒน์ วงศ์จารถกร วศ. 2529</div>
                        <div>เวลา 16:37 - 16:45</div>

                        <div className="flex flex-row mt-5">
                            <div className="mr-5 font-semibold">อุปกรณ์ที่ยืม:</div>
                            <div className="mr-5">ปลั๊กพ่วง</div>
                            <div className="mr-5">สาย HDMI</div>
                            <div className="mr-5">สาย USB</div>
                        </div>
                        
                        <ViewButton/>
                        {/* <div className="flex flex-row-reverse">
                            <button className="bg-[black] rounded-lg text-white px-7 py-2 absolute bottom-0 rigth-0 mr-5">view</button>
                        </div> */}
                    </div>
                </div>

                <div >________________________________________________________________________________________________________</div>

                <div className=" mt-4 ">
                    <div className="flex flex-row justify-between">
                        <div className="font-semibold text-3xl">21 Feb 2024</div>
                        <div className="Right-to-left mr-10">Finished</div>
                    </div>
                    <div className="relative">
                        <div className="mt-3">ชั้น 3 Seminar room Sem3 บริษัทปูนซีเมนต์ไทย(แก่งคอย) จำกัด 3</div>
                        <div>เวลา 18:00 - 19:30</div>

                        <div className="flex flex-row mt-5">
                            <div className="mr-5 font-semibold">อุปกรณ์ที่ยืม:</div>
                            <div className="mr-5">-</div>
                        </div>
                        
                        <ViewButton/>
                        {/* <div className="flex flex-row-reverse">
                            <button className="bg-[black] rounded-lg text-white px-7 py-2 absolute bottom-0 rigth-0 mr-5">view</button>
                        </div> */}
                    </div>

                </div>

                <div >________________________________________________________________________________________________________</div>

                <div className=" mt-4 ">
                    <div className="flex flex-row justify-between">
                        <div className="font-semibold text-3xl">13 Feb 2024</div>
                        <div className="Right-to-left mr-10">Finished</div>
                    </div>
                    <div className="relative">
                        <div className="mt-3">ชั้น 4 Study room Stu7 บริษัท ปูนซีเมนต์ไทย (แก่งคอย) จำกัด 11</div>
                        <div>เวลา 13:16 - 15:30</div>

                        <div className="flex flex-row mt-5">
                            <div className="mr-5 font-semibold">อุปกรณ์ที่ยืม:</div>
                            <div className="mr-5">สาย HDMI</div>
                            <div className="mr-5">สาย USB</div>
                        </div>
                        
                        <ViewButton/>
                        {/* <div className="flex flex-row-reverse">
                            <button className="bg-[black] rounded-lg text-white px-7 py-2 absolute bottom-0 rigth-0 mr-5">view</button>
                        </div> */}
                    </div>

                </div>

                <div>________________________________________________________________________________________________________</div>

                <div className=" mt-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-semibold text-3xl">05 Feb 2024</div>
                        <div className="Right-to-left mr-10">Finished</div>
                    </div>
                    <div className="relative">
                        <div className="mt-3">ชั้น 4 Study room Stu5 รุ่น วศ. 2523 9</div>
                        <div>เวลา 16:49 - 18:00</div>

                        <div className="flex flex-row mt-5">
                            <div className="mr-5 font-semibold">อุปกรณ์ที่ยืม:</div>
                            <div className="mr-5">สาย HDMI</div>
                        </div>
                        
                        <ViewButton/>
                        {/* <div className="flex flex-row-reverse">
                            <button className="bg-[black] rounded-lg text-white px-7 py-2 absolute bottom-0 rigth-0 mr-5">view</button>
                        </div> */}
                    </div>

                </div>

            </div>

        </div>
    )
}