import { Download } from '@/assets';
import CBtn from '@/components/button/CBtn';
import React from 'react';

type cusType = {
    onNav?: () => void,
    title?: string,
}
export default function TitleBar({ onNav = () => { }, title = '' }: cusType) {
    return (
        <div className="flex items-center justify-between">
            <h1 className=" text-2xl font-bold pb-5 underline underline-offset-4">{title}</h1>
            <div className="flex space-x-4">
                <CBtn onClick={onNav}>
                    Add +
                </CBtn>
                <CBtn onClick={onNav} className="bg-cwhite border text-gray-900 flex items-start space-x-2">
                    <p>Export</p>
                    <Download className="w-5 h-5" />
                </CBtn>
            </div>
        </div>
    )
}
