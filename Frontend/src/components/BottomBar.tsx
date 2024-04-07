import styles from "./bottombar.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function BottomBar() {
    return (
        <div className="bg-black text-white py-4 px-6 flex justify-between items-center fixed bottom-0 w-full">
            <div className="flex items-center">
                <span className="mr-2 text-md font-bold">GET IN TOUCH</span>
                <a href="https://www.facebook.com/ChulaEngineering" aria-label="Facebook" className="ml-4">
                    <FaFacebook className="text-white text-xl" />
                </a>
                <a className="ml-4" href="https://www.instagram.com/chulaengineeringlibrary" aria-label="Instagram">
                    <FaInstagram className="text-white text-xl mr-8" />
                </a>
            </div>
            <div>
                <span className="font-bold">
                    Copyright © 2024. All Rights Reserved
                </span>
            </div>
        </div>
    );
}

