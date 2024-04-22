import CImg from '@/components/Image/CImg'
import React from 'react';
import defaultImg from '@/assets/imgs/delivery3.png';

export default function About() {
    return (
        <div className="relative container mx-auto grid grid-cols-2 gap-10 py-10">
            <h1 className="absolute text-8xl font-TT z-10 left-1/2 -translate-x-1/2 top-16 opacity-70 font-semibold">About Us</h1>
            <div>
                <CImg src={defaultImg} />
            </div>
            <div className="flex items-center justify-center text-justify font-TT opacity-80">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}
