"use client"

import React, { useState } from 'react';
import TimeReserve from './TimeReserve';
import SucceedBox from './SucceedBox';
import FailedBox from './FailedBox';

export default function OpenHourBox() {
    const [monFriOpen, setMonFriOpen] = useState('');
    const [monFriClosed, setMonFriClosed] = useState('');
    const [satOpen, setSatOpen] = useState('');
    const [satClosed, setSatClosed] = useState('');
    const [sunOpen, setSunOpen] = useState('');
    const [sunClosed, setSunClosed] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);


    const [showSucceedBox, setShowSucceedBox] = useState(false);
    const [showFailedBox, setShowFailedBox] = useState(false);

    const handleSave = () => {
        alert("TODO - Waiting for API")

        const response = true; // Waiting for API

        setTimeout(() => {
            if (response) {
                setShowSucceedBox(true);
            } else {
                setShowFailedBox(true);
            }
        }, 350);
    };

    const handleTimeChange = (time: React.SetStateAction<null>) => {
        setSelectedTime(time);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg text-center self-start text-black w-3/6 mt-0 shadow-md border border-gray-300">
                <p className='text-3xl font-bold mb-4'>เวลาเปิดจองห้องปกติ</p>
                <hr className="mb-4" />
                {/* <TimeReserve onDateChange={handleTimeChange} /> */}
                <div className="mb-6">
                    <p className="mb-4 ml-10 text-left text-2xl mb-2 font-bold text-orange-800">Monday - Friday</p>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-full">
                            <p className="text-center pr-2">Open :</p>
                            <input type="text" value={monFriOpen} onChange={(e) => setMonFriOpen(e.target.value)} placeholder="00:00" className="ml-5 border rounded px-2 bg-white" />
                            <p className="ml-5 text-center px-2">Closed :</p>
                            <input type="text" value={monFriClosed} onChange={(e) => setMonFriClosed(e.target.value)} placeholder="23:59" className="ml-5 border rounded px-2 bg-white" />
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="mb-4 ml-10 text-left text-2xl mb-2 font-bold text-orange-800">Saturday</p>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-full">
                            <p className="text-center pr-2">Open :</p>
                            <input type="text" value={satOpen} onChange={(e) => setSatOpen(e.target.value)} placeholder="00:00" className="ml-5 border rounded px-2 bg-white" />
                            <p className="ml-5 text-center px-2">Closed :</p>
                            <input type="text" value={satClosed} onChange={(e) => setSatClosed(e.target.value)} placeholder="23:59" className="ml-5 border rounded px-2 bg-white" />
                        </div>
                    </div>

                </div>
                <div className="mb-6">
                    <p className="mb-6 ml-10 text-left text-2xl mb-2 font-bold text-orange-800">Sunday</p>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-full">
                            <p className="text-center pr-2">Open :</p>
                            <input type="text" value={sunOpen} onChange={(e) => setSunOpen(e.target.value)} placeholder="00:00" className="ml-5 border rounded px-2 bg-white" />
                            <p className="ml-5 text-center px-2">Closed :</p>
                            <input type="text" value={sunClosed} onChange={(e) => setSunClosed(e.target.value)} placeholder="23:59" className="ml-5 border rounded px-2 bg-white" />
                        </div>
                    </div>
                </div>
                <button onClick={handleSave} className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-5 rounded">Save</button>
            </div>
            {
                showSucceedBox ?
                    <SucceedBox header='Saved' message='Room reserve hour has been updated !!' />
                    : null
            } ,{
                showFailedBox ?
                    < FailedBox header='Failed to save' message='Failed to save reserve hour.' />
                    : null
            }
        </div>
    );
}
