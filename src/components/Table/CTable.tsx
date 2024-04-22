import React from 'react';

const style = { bodyColor: 'bg-[#FCFCFC]', rowColor: 'bg-cblack', txtColor: 'text-cwhite' };

type CusType = {
    children: string | JSX.Element | JSX.Element[],
    header: any,
}

export default function CTable({ children, header }: CusType) {
    return (
        <table className={`${style.bodyColor} font-poppins w-full`}>
            <thead className="">
                <tr className={`text-left ${style.rowColor}`}>
                    {header.map((h: any, i: number) => (
                        <th key={i} className={`whitespace-nowrap px-3 py-2 text-base font-normal capitalize border ${style.txtColor}`} >{h}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}
