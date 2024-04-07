import aboutCSS from './page.module.css'
import Image from 'next/image'
import CarouselCard from '@/components/Carousel'
import Link from 'next/link'

export default function Aboutus() {

    const slides1 = [
        '/img/IMG_4321.jpg',
        '/img/IMG_4346.jpg',
    ]

    const slides2 = [
        '/img/map.png',
        '/img/IMG_9269.jpg',
    ]

    const slides3 = [
        '/img/IMG_9266.jpg',
        '/img/IMG_9242.jpg',
    ]

    return (
        <main className="w-full min-h-screen flex flex-col">
            <div className="w-full h-[530px] text-center bg-[#F9F9F9] px-10 flex flex-col justify-center items-center space-y-10">
                <div className="text-4xl mt-5 font-bold text-4xl">About us</div>
                <div className='text-xl'>
                    Chula Engineering Library offers a variety of books along with book circulation service to faculty members, CU staffs, and students.
                </div>
            </div>

            <div className={aboutCSS.aboutContainerOne}>
                <div className="h-full flex flex-col justify-center space-y-4 aboutText p-10">
                    <div className="text-4xl font-semibold">Office Hours</div>
                    <div className="text-xl">
                        <ul>
                            <li>Regular Period Mon-Fri 08:00 - 19:00, Sat 09:00 - 17:00</li>
                            <li>One Month Prior to Exam Mon-Fri 08:00 - 21:00, Sat 09:00 - 17:00</li>
                            <li>Library closes on Sunday and public holidays</li>
                        </ul>
                    </div>
                </div>
                <div className="min-h-[300px] h-full flex justify-center items-center">
                    <CarouselCard slide={slides1}/>
                </div>
            </div>

            <div className={aboutCSS.aboutContainerTwo}>
                <div className="min-h-[300px] h-full flex justify-center items-center">
                    <CarouselCard slide={slides2}/>
                </div>
                <div className="h-full flex flex-col justify-center space-y-4 aboutText p-10">
                    <div className="text-4xl font-semibold">Location</div>
                    <div className="text-xl">Chula Engineering Library, 3rd and 4th floor, Building 3.
                        Faculty of Engineering, Chulalongkorn University
                        254 Payathai Rd., Patumwan, Bangkok 10330
                        <br />
                        <Link href="https://maps.app.goo.gl/pSvCgFpoy3RsSakz6" target='_blank'>
                            <button className='border border-[#D2353C] text-[#D2353C] py-2 px-4 my-7 rounded-xl border-2 hover:bg-[#D2353C] hover:text-[#F9F9F9]'>
                                Go to Google Map
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={aboutCSS.aboutContainerOne}>
                <div className="h-full flex flex-col justify-center space-y-4 aboutText p-10">
                    <div className="text-4xl font-semibold">Contact</div>
                    <div className="text-xl">
                    <ul>
                            <li>Telephone 02-218-6364</li>
                            <li>Fax 02-218-6358</li>
                        </ul>
                    </div>
                </div>
                <div className="min-h-[300px] h-full flex justify-center items-center">
                    <CarouselCard slide={slides3}/>
                </div>
            </div>

        </main>
    )
}