import CImg from '@/components/Image/CImg';
import React from 'react';
import defaultImg from '@/assets/imgs/delivery3.png';

export default function Banner() {
    return (
        <div className="bg-base5 min-h-[18rem] flex">
            <div className="px-4 md:px-0 grid grid-cols-2 container mx-auto ">
                <div className="text-base1 flex flex-col justify-center space-y-6 font-TT">
                    <h1 className="text-2xl md:text-5xl">Digital Shop</h1>
                    <p className="underline text-lg">www.eshop.com</p>
                </div>
                <div className="py-8">
                    <CImg src={defaultImg} />
                </div>
            </div>
        </div>
    )
}
