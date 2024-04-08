import React from 'react';
import MapInfo from './MapInfo';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BottomBar from './BottomBar';

export default function InfoBanner() {
    return (
        <div className='flex flex-col w-full'>
            <div className="bg-[#4E1003] text-[#F9F9F9] pt-10 pb-[100px] px-7 sm:px-10 flex justify-center items-start">
                <div className="grid grid-cols-1 gap-y-[90px] gap-x-[10px] md:grid-cols-2 xl:grid-cols-4  mx-auto">

                    <div className="flex flex-col text-left col-span-1">
                        <div className="text-2xl font-bold mb-10 ">Services</div>
                        <div className='text-md font-semibold hover:'>Books & Circulation</div>
                        <div className='text-md font-semibold'>Study Space</div>
                        <div className='text-md font-semibold'>Library News</div>
                        <div className='text-md font-semibold'>About Library</div>
                    </div>

                    <div className="flex flex-col text-left col-span-1">
                        <div className="text-2xl font-bold mb-10">Information</div>
                        <div className='text-md font-semibold'>Office Hours</div>
                        <div className='text-md font-semibold'>Location</div>
                        <div className='text-md font-semibold'>Contact</div>
                    </div>


                    <div className="col-span-2 flex flex-col flex-wrap text-left sm:row-span-2">
                        <div className="text-2xl font-bold mb-10">About Us</div>
                        <div className="w-full grid gap-0 grid-cols-1 md:grid-cols-2 justify-start items-start">
                            <div className="w-full">
                                <MapInfo />
                            </div>
                            <div className="w-full font-semibold text-md pt-5 md:pt-0 md:pl-5">
                                Chula Engineering Library.
                                <br />
                                3rd and 4th floor, Building 3 Faculty of Engineering, Chulalongkorn University 254 Phayathai Rd., Pathumwan, Bangkok 10330
                                <br />
                                <div className='mt-5'>
                                    <LocalPhoneIcon className='mr-5' />
                                    02-218-6364
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <BottomBar /> */}
        </div>
    );
};
