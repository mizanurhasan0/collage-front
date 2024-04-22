'use client';
import CImg from '@/components/Image/CImg';
import React from 'react';
import defautImg from '@/assets/imgs/delivery3.png';
import defautImg2 from '@/assets/imgs/delivery.jpg';
import { useRouter } from 'next/navigation';
import Rating from './Rating';

export default function Card() {
    const navigate = useRouter();
    return (
        <div className="border border-base6 border-opacity-20">
            <div className="h-64 relative group cursor-pointer">
                <CImg src={defautImg2} />
                <div className="absolute top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <CImg src={defautImg} />
                </div>
            </div>
            <div className="bg-white rounded-t-2xl -mt-3 relative text-center pt-4 space-y-2">
                <p className="text-xl font-semibold text-base3">Product Name</p>
                <div className="flex justify-center space-x-4 text-base4">
                    <p className="text-xl font-semibold">$3</p>
                    <p className="line-through pt-1">$5</p>
                </div>
                {/*  */}
                <Rating />
                {/*  */}
                <div className="bg-base3 h-10 rounded-t-xl flex items-center justify-center text-white text-xs font-semibold">
                    Add to cart
                </div>
            </div>
        </div>
    )
}
