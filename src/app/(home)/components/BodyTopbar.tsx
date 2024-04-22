'use client';
import { Bottom, Logout, Notification, Search, User } from '@/assets';
import CImg from '@/components/Image/CImg';
import CInput from '@/components/input/CInput';
import { useRouter } from 'next/navigation';
import React from 'react';

const MenuList = [{ id: 1, name: 'Profile', icon: User }, { id: 2, name: 'Logout', icon: Logout }];

export default function BodyTopbar() {
    const route = useRouter();
    const onAction = (name: string) => {
        if (name === "Profile") route.push('/profile');
    }
    return (
        <div className="bg-cpink py-2 flex pr-5 shadow-lg border-b border-gray-900">
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                    <div className="bg-cwhite rounded-md flex items-center pr-2">
                        <CInput className="border-none" />
                        <Search className="stroke-cpink w-8 h-8" />
                    </div>
                    <div className="relative">
                        <Notification className="w-8 h-8 stroke-cwhite cursor-pointer" />
                        <p className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cwhite animate-pulse " />
                    </div>
                </div>
                <div className="text-cwhite">
                    <p className="font-semibold">Mizanur</p>
                    <p className="text-xs">CEO</p>
                </div>
                <div className="relative flex items-center space-x-1 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <CImg />
                    </div>
                    <Bottom className="w-6 h-6 fill-cwhite" />
                    <div className="absolute bg-cpink p-4 top-8 right-0 rounded-b-md text-cwhite -z-10 group-hover:z-10 -translate-y-20 group-hover:translate-y-5 duration-300 space-y-4">
                        {MenuList.map((d, i) => (
                            <div key={i} className="flex items-center space-x-2" onClick={() => onAction(d?.name)}>
                                <d.icon className="w-6 h-6 stroke-cwhite" />
                                <p>{d.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
