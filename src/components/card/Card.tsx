import { User } from '@/assets';
import React from 'react';

type cusType = {
    Icon?: any,
    price?: string,
    type?: string
}
export default function Card({ Icon = User, price = "00", type = 'Deliverd' }: cusType) {
    return (
        <div className="bg-cpink text-cwhite h-32 min-w-[8rem] w-full p-3 text-center py-3 rounded-md  shadow-lg">
            <div className="w-12 h-12 p-2 bg-cblack bg-opacity-50 rounded-full mx-auto shadow-lg flex items-center justify-center">
                <Icon className=" w-6 h-6 fill-cwhite" />
            </div>
            <p className="pt-2 text-xl font-semibold">৳ {price}</p>
            <p className="text-sm text-cblack">{type}</p>
        </div>
    )
}
