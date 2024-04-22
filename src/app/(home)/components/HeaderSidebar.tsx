import CImg from '@/components/Image/CImg';
import Logo from "@/assets/imgs/logo.jpeg";
import React from 'react';

export default function Sidebar() {
    return (
        <div className="px-7 flex items-center justify-between relative ">
            <div className="flex items-center before:space-x-2">
                <div className="w-8 h-8 rounded-md overflow-hidden">
                    <CImg src={Logo} />
                </div>
                <p className="text-primary text-2xl w-20 truncate xl:w-auto font-semibold">SoftwareBD</p>
            </div>
        </div>
    )
}
