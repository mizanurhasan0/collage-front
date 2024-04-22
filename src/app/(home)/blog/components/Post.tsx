import CImg from '@/components/Image/CImg';
import React from 'react';
import defaultImg from '@/assets/imgs/deliveryman.png';

export default function Post() {
    return (
        <div className="rounded-md border border-base3 border-opacity-20 px-4 cursor-pointer hover:shadow-2xl transition-all duration-300">
            <div className="pt-4">
                <CImg src={defaultImg} />
            </div>
            <div className="space-y-2 py-4">
                <div className="flex items-center text-sm font-TT">
                    <h3 className="font-semibold">Business Travel</h3>
                    <p className="opacity-50"> - July 2, 2020</p>
                </div>
                <h2 className="text-lg font-semibold">Your most unhappy customers are your greatest source of learning.</h2>
                <p className="line-clamp-3 text-sm opacity-70 text-justify">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
            </div>
        </div>
    )
}
