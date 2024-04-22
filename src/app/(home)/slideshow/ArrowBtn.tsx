import { LeftArrow } from '@/assets';
import React from 'react';

type Types = {
    setIdx: any,
    Imgs: any[]
}
export default function ArrowBtn({ setIdx, Imgs }: Types) {

    const onNext = () => {
        setIdx((index: number) => {
            if (index === Imgs.length - 1) return 0;
            return index + 1;
        })
    }

    const onPreview = () => {
        setIdx((index: number) => {
            if (index === 0) return Imgs.length - 1;
            return index - 1;
        })
    }
    return (
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center">
            <LeftArrow onClick={onPreview} className="w-12 h-1w-12 cursor-pointer" />
            <LeftArrow onClick={onNext} className="w-12 h-1w-12 cursor-pointer rotate-180" />
        </div>
    )
}
