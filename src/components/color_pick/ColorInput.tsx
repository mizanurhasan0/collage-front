"use client";
import { Pen, Select } from '@/assets';
import React, { useState } from 'react';

const getColor = [{ id: 1, color: '#ffff' }, { id: 2, color: '#bbb' }, { id: 3, color: '#c2c' }]

type cusType = {
    label?: string,
}
type colorObj = {
    id: string
}[];
export default function ColorInput({ label = 'Color' }: cusType) {
    const [color, setColor] = useState<colorObj>([]);

    const onColor = (id: string) => {
        const check = color.some((c: any) => c === id);
        if (check) setColor((prev) => prev.filter((c: any) => c !== id));
        else setColor((prev: any) => ([...prev, id]));
    }
    return (
        <div className="">
            {label ? <p className="py-1 opacity-70">{label}</p> : ''}
            <div className="flex space-x-2 relative">
                {getColor.map((d: any, i: number) => (
                    <div key={i} onClick={() => onColor(d?.id)} className="w-6 h-6 border flex items-center justify-center" style={{ background: d.color }}>
                        {color.includes(d.id) ? <Select className="w-4 h-4 stroke-cwhite" /> : ''}
                    </div>
                ))}
                <input id="colorInput" className="w-1 opacity-0" type='color' onClick={(e: any) => console.log(e)} />
                <label htmlFor='colorInput'>
                    <Pen className="w-6 h-6 cursor-pointer" />
                </label>
            </div>
        </div>
    )
}
