import CImg from '@/components/Image/CImg';
import React from 'react';
import defaultImg from '@/assets/imgs/contact.jpeg';
import CInput from '@/components/input/CInput';
import CTextarea from '@/components/textarea/CTextarea';
import CBtn from '@/components/button/CBtn';

export default function page() {
    return (
        <div className="relative">
            <h1 className="absolute text-7xl font-TT p-4 rounded-md text-center -translate-x-1/2 left-1/2 z-10 top-10 opacity-70">Contact Us</h1>
            <div className="container mx-auto grid grid-cols-2 py-10 gap-10">
                <div className="rounded-md border-opacity-40 shadow-xl space-y-2">
                    <p className="text-xl p-4 font-semibold opacity-70 italic">Lets chat, Reach Out to Us...</p>
                    <div className="space-y-5 p-4">
                        <CInput label="Name" />
                        <CInput label="Email" />
                        <CTextarea label="Message" />
                        <CBtn>Send</CBtn>
                    </div>
                </div>
                <div className="rounded-md overflow-hidden flex items-center justify-center">
                    <div className="h-96 w-80">
                        <CImg src={defaultImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}
