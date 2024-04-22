import CImg from '@/components/Image/CImg';
import React from 'react';
import defaultImg from '@/assets/imgs/eshop.jpg';
import QtyInput from '@/components/quntityInput/QtyInput';
import { Delete } from '@/assets';

export default function CartItem() {
    return (
        <table className="w-full">
            <thead>
                <tr className="text-xs opacity-40 border-b h-8 uppercase">
                    <th className='text-left'>Product</th>
                    <th className='text-right'>Total</th>
                </tr>
            </thead>
            <tbody>
                {[1, 2, 3, 4].map((d) => (
                    <tr key={d}>
                        <td>
                            <div className=" py-3">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-[3.5rem] h-14">
                                        <CImg src={defaultImg} />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="">
                                            Hat Green no branches
                                            Green no branches
                                            Green no branches
                                            Green no branches
                                        </p>
                                        <p className="opacity-50">$430</p>

                                    </div>
                                </div>
                                <div className="flex items-center justify-end space-x-4 ">
                                    <QtyInput />
                                    <Delete className="w-6 h-6 cursor-pointer" />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="px-2">
                                $400
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
