"use client";
import { Bottom, Notification } from '@/assets';
import React, { useEffect, useRef, useState } from 'react';

type propsType = {
    DefaultVal?: string,
    Opts?: any,
    label?: string,
}
const DefaultOpts: { id: number, name: string }[] = [{ id: 1, name: 'Option 1' }, { id: 2, name: 'Option 2' }, { id: 3, name: 'Option 3' }, { id: 4, name: 'Option 4' }];

export default function CusDropdown({ DefaultVal = "Select", Opts = DefaultOpts, label = '' }: propsType) {
    const refDropdown = useRef<any>();
    const [selectOpt, setSelectOpt] = useState(DefaultVal);

    const getSugBar = () => {
        const dpd = refDropdown.current.querySelector('.customStyleDropdown');
        const check = dpd.classList.contains('hidden');
        return { check, dpd };
    }

    const onOpen = () => {
        const { check, dpd } = getSugBar();
        if (check) dpd.classList.remove('hidden');
        else dpd.classList.add('hidden');
    };

    useEffect(() => {
        const outsideClick = (e: any) => {
            if (refDropdown.current && !refDropdown.current.contains(e.target)) {
                const { check, dpd } = getSugBar();
                if (!check) dpd.classList.add('hidden');
            }
        }
        document.addEventListener('mousedown', outsideClick);
        return () => document.removeEventListener('keydown', outsideClick);
    }, []);

    const onSelect = (opt: string) => {
        setSelectOpt(opt);
        const { check, dpd } = getSugBar();
        if (!check) dpd.classList.add('hidden');
    }
    return (
        <div>
            {label ? <p className="py-1 opacity-70">{label}</p> : ''}

            <div ref={refDropdown} className="relative border h-14 border-opacity-40 rounded-md w-full">
                <div
                    onClick={onOpen}
                    className="capitalize w-full text-left
                flex items-center justify-between  h-full px-4 opacity-70 text-sm">
                    <p className="">{selectOpt}</p>
                    <Bottom className="fill-cblack w-6 h-6" />

                </div>
                <div
                    className="customStyleDropdown z-10 hidden flex flex-col absolute bg-white w-full text-sm border border-primary border-opacity-50 border-t-0 shadow-md rounded-b-md"
                >
                    {Opts.map((d: any, i: number) => (
                        <button
                            key={i}
                            className=" px-2 py-1 hover:bg-secondary hover:text-txtPrimary rounded-sm whitespace-nowrap text-left text-gray hover:text-black"
                            onClick={() => onSelect(d?.name)}>
                            {d.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

