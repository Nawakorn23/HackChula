"use client"

import React, { useState } from 'react';
import TimeReserve from './TimeReserve';

import SucceedBox from './SucceedBox';
import FailedBox from './FailedBox';
import { motion } from 'framer-motion';

export default function PreExamOpenHourBox() {

    const [monFriOpen, setMonFriOpen] = useState('');
    const [monFriClosed, setMonFriClosed] = useState('');
    const [satOpen, setSatOpen] = useState('');
    const [satClosed, setSatClosed] = useState('');
    const [sunOpen, setSunOpen] = useState('');
    const [sunClosed, setSunClosed] = useState('');

    const [showSucceedBox, setShowSucceedBox] = useState(false);
    const [showFailedBox, setShowFailedBox] = useState(false);

    const handleSave = () => {
        alert("TODO - Waiting for API")

        const response = false; // Waiting for API

        setTimeout(() => {
            if (response) {
                setShowSucceedBox(true);
            } else {
                setShowFailedBox(true);
            }
        }, 350);
    };

    const handleDismissSucceedBox = () => {
        setShowSucceedBox(false);
    };

    const handleDismissFailedBox = () => {
        setShowFailedBox(false);
    };
    
    return (
        // <div className="flex justify-center items-center h-screen">
        <div>
            <div className="bg-white p-8 rounded-lg text-center self-start text-black w-3/6 mt-0 shadow-md border border-gray-300">
                <p className='text-3xl font-bold mb-4'>ตารางสรุปเวลาจองห้องกรณีพิเศษ</p>
                <hr className="mb-4" />
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
                <motion.button
                    onClick={handleSave}
                    className="mt-6 bg-gray-900 hover:bg-black text-white font-bold py-3 px-5 rounded shadow-md"
                    whileHover={{ scale: 1.05 }}
                >
                    Save
                </motion.button>
            </div>
            {
                showSucceedBox ?
                    <SucceedBox
                        header='Saved'
                        message='Pre-exam open hour saved.'
                        onDismiss={handleDismissSucceedBox}
                    /> : null
            }, {
                showFailedBox ?
                    <FailedBox
                        header='Failed'
                        message='Failed to save Pre-exam open hour.'
                        onDismiss={handleDismissFailedBox}
                    /> : null
            }
        </div>
    );
}
