import CImg from '@/components/Image/CImg';
import React from 'react';
import defaultImg from '@/assets/imgs/deliveryman.png';
import CInput from '@/components/input/CInput';
import CBtn from '@/components/button/CBtn';
import CRadio from '../components/CRadio';

export default function page() {
    return (
        <div className="py-10 container mx-auto">
            <h1 className="text-2xl font-TT text-center pb-5">E-Shop Delivery Form</h1>
            <div className="space-y-4">
                <div className="flex items-center flex-col justify-center">
                    <div className="w-52">
                        <CImg src={defaultImg} />
                    </div>
                    <p className="text-base4 text-xs py-2 opacity-70">You just place an order and we will deliver</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <CInput label="Customer Name" />
                    <CInput label="Customer Address" />
                    <CInput label="Phone Number" />
                    <div className="flex items-end">
                        <CRadio />
                    </div>
                </div>
                <CBtn>Place order</CBtn>
            </div>
        </div>
    )
}
