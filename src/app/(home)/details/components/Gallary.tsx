import CImg from '@/components/Image/CImg';
import React from 'react';
import defaultImg from '@/assets/imgs/Delivery2.jpg';

export default function Gallary() {
    return (
        <div className="space-y-4">
            <div>
                <CImg src={defaultImg} />
            </div>
            <div className="flex space-x-4 overflow-auto">
                <div className="w-20 h-20 border border-base6">
                    <CImg src={defaultImg} />
                </div>
                <div className="w-20 h-20 border border-base6">
                    <CImg src={defaultImg} />
                </div>
                <div className="w-20 h-20 border border-base6">
                    <CImg src={defaultImg} />
                </div>
            </div>
        </div>
    )
}
