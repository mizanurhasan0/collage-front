'use client';
import CImg from '@/components/Image/CImg';
import React, { useEffect, useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import ArrowBtn from './ArrowBtn';
import PreviewBtn from './PreviewBtn';

const images = [
    "https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
export default function SlideShow() {
    const [curIdx, setCurIdx] = useState(0);

    const onNext = () => {
        setCurIdx((index: number) => {
            if (index === images.length - 1) return 0;
            return index + 1;
        })
    }
    let intervalId: any;
    useEffect(() => {
        intervalId = setInterval(() => {
            onNext();
        }, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-[22.5rem] container mx-auto box-border relative">
            <div className="h-full flex overflow-hidden">
                {images.map((img, i) => (
                    <div key={i} className="translate-x-full ease-out duration-1000" style={{ transition: 'translate 300mx case-in-out', translate: `${-100 * (curIdx + 1)}%` }}>
                        <CImg src={img} className="w-screen" />
                    </div>
                ))}
            </div>
            <ArrowBtn setIdx={setCurIdx} Imgs={images} />
            <PreviewBtn Imgs={images} setIdx={setCurIdx} Idx={curIdx} />
        </div>
    );
}
