"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import OpenHourBox from "./OpenHourBox"

import AlertBox from './SucceedBox';
import PreExamOpenHourBox from './PreExamOpenHour';

export default function ManageOpenHour() {

    // const [showAlertBox, setShowAlertBox] = useState(false);

    // const handleReserveClick = () => {
    //     setShowAlertBox(true);
    //     // alert(showAlertBox)
    // }

    
    // TODO : Handle 2 save button
    // Handle multiple save alert ()


    return (
        <div>
            <OpenHourBox />
            <PreExamOpenHourBox/>
        </div>
    )
}