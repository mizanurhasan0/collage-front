import { Search, Sort } from '@/assets';
import CusDropdown from '@/components/dropdown/CusDropdown';
import CInput from '@/components/input/CInput';
import React from 'react';

export default function TblFilterBar() {
    return (
        <div className="flex justify-between my-5">
            <CusDropdown />
            <div className="flex space-x-2">
                <div className="flex border rounded-md px-2">
                    <CInput className="border-none" />
                    <Search className="w-10 stroke-cpink" />
                </div>
                <Sort className="w-10 border rounded-lg cursor-pointer" />
            </div>
        </div>
    )
}
