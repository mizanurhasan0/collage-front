import CImg from '@/components/Image/CImg';
import React from 'react';

type Types = {
    Imgs: any[],
    setIdx: any,
    Idx: Number
}
export default function PreviewBtn({ Imgs = [], setIdx, Idx }: Types) {
    const onIdx = (idx: number) => {
        setIdx(idx)
    }
    return (
        <div className="flex items-center justify-center space-x-2 -mt-12">
            {Imgs.map((img, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border xl:border-2  overflow-hidden z-10 cursor-pointer duration-300 transition-all ${Idx === i ? 'border-base3' : 'border-base2'}`} onClick={() => onIdx(i)}>
                    <CImg src={img} />
                </div>

            ))}
        </div>
    )
}
