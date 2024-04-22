'use client';
import { Delete, Menu, OpenEye, Pen } from '@/assets';
import React, { useEffect, useRef, useState } from 'react';

const menuItemm = [
    { id: 1, name: 'View', icon: OpenEye },
    { id: 2, name: 'Edit', icon: Pen },
    { id: 3, name: 'Delete', icon: Delete }
]
export default function TblMenu() {
    const [show, setShow] = useState<Boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const outsideClick = (e: any) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) setShow(false);
        }
        document.addEventListener('mousedown', outsideClick);
        return () => document.removeEventListener('keydown', outsideClick);
    }, []);

    return (
        <div ref={menuRef}>
            <div
                onClick={() => setShow(!show)}
                className="w-10 mx-auto text-cwhite flex  justify-center text-2xl rounded-lg my-1 cursor-pointer">
                <Menu className="w-10 h-10" />
            </div>
            <div className={`absolute z-10 right-0 p-3 border bg-cwhite rounded-md shadow-md w-32  translate-y-32 duration-500 ${show ? 'opacity-100 translate-y-1' : 'opacity-0 '}`}>
                {[menuItemm.map((d) => (
                    <div key={d.id} className="flex items-center space-x-2 py-2 cursor-pointer">
                        <d.icon className="w-5 h-5" />
                        <p>{d.name}</p>
                    </div>
                ))]}
            </div>
        </div>
    )
}
