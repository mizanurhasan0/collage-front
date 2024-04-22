import React from 'react';

export default function Topbar() {
    return (
        <div className=" w-full text-base3 ">
            <div className="bg-base2 flex justify-between items-center py-1 px-5 ">
                <p className="font-semibold uppercase pr-2">Headline</p>
                <div className="overflow-hidden">
                    <p className="animate-marquee whitespace-nowrap  w-full text-sm">General Notice :: * পাঠদান কার্যক্রম সংক্রান্ত বিজ্ঞপ্তি * ২০২২-২০২৪ শিক্ষাবর্ষের শিক্ষার্থীদের ফরম পূরণের সংশোধিত বিজ্ঞপ্তি * ১৭ এপ্রিল ২০২৪ ঐতিহাসিক মুজিবনগর </p>
                </div>
                <div></div>
            </div>
            <div className="bg-base1 h-full flex items-center justify-between py-2">
                <div></div>
                <div className="h-full text-center font-bold space-y-2">
                    <h1 className="text-4xl font-bold">সরকারি আজিজুল হক কলেজ,বগুড়া</h1>
                    <p className="text-[1.25rem]">Govt Azizul Haque College , Bogura</p>
                    <p>College Code: 119246</p>
                </div>
                <div></div>
            </div>
        </div >
    )
}
