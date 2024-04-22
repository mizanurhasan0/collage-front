'use client';
import React, { useState } from 'react';

export default function CRadio() {
    const [selectRd, setSelectRd] = useState<string>('inside');

    const setOption = (opt: string) => {
        setSelectRd(opt);
    };

    return (
        <div className="space-y-2">
            <div className="space-x-2 flex items-center cursor-pointer" onClick={() => setOption('inside')}>
                <div className={`w-5 h-5 rounded-full border  flex items-center justify-center ${selectRd === 'inside' ? 'border-base3' : ''}`}><div className={`w-3 h-3  rounded-full ${selectRd === 'inside' ? 'bg-base3' : ''}`} /></div>
                <span className={` ${selectRd === 'inside' ? '' : 'opacity-70'}`}>Inside Dhaka (60 TK)</span>
            </div>
            <div className="space-x-2 flex items-center cursor-pointer" onClick={() => setOption('outside')}>
                <div className={`w-5 h-5 rounded-full border  flex items-center justify-center ${selectRd === 'outside' ? 'border-base3' : ''}`}><div className={`w-3 h-3  rounded-full ${selectRd === 'outside' ? 'bg-base3' : ''}`} /></div>
                <span className={` ${selectRd === 'outside' ? '' : 'opacity-70'}`}>Outside Dhaka (120 TK)</span>
            </div>
        </div>
    )
}
