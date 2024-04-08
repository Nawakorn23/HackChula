import Banner from "@/components/Banner";
import Link from "next/link";

import BottomBar from "@/components/BottomBar";

import ManageOpenHour from "@/components/ManageOpenHour";
import OpenHourBox from "@/components/OpenHourBox";

export default function controllers() {
    return (
        <main className="bg-gray-300 relative">
            <ManageOpenHour />
        </main>
    );
}