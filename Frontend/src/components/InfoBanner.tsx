import React from 'react';
import MapInfo from './MapInfo';

export default function InfoBanner() {
    return (
        <div className="bg-orange-800 text-white py-4 w-full auto top-0 left-0 z-0">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-lg col-span-1 md:col-span-1 md:w-1/3">
                        <h2 className="text-2xl font-bold mb-10">Services</h2>
                        <ul className="list-disc pl-4">
                            <ul>Books & Circulation</ul>
                            <ul>Study Space</ul>
                            <ul>Library News</ul>
                            <ul>About Library</ul>
                        </ul>
                    </div>
                    <div className="text-lg col-span-1 md:col-span-1 md:w-1/3">
                        <h2 className="text-2xl font-bold mb-10">Information</h2>
                        <ul className="list-disc pl-4">
                            <ul>Office Hours</ul>
                            <ul>Location</ul>
                            <ul>Contact</ul>
                        </ul>
                    </div>

                    <div className="flex flex-wrap row-span-2">
                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-2xl font-bold mb-2">About Us</h2>
                            <div className="text-lg">
                                <ul>Chula Engineering Library</ul>
                                <ul>3rd and 4th floor Building 3</ul>
                                <ul>Faculty of Engineering, Chulalongkorn University</ul>
                                <ul>254 Phayathai Rd., Pathumwan, Bangkok, 10330</ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="text-center my-10">
                                <MapInfo />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
