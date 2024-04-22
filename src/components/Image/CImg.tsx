import Image, { StaticImageData } from 'next/image';
import React from 'react';
import defaultImg from '../../assets/imgs/eshop.jpg';

type imgType = {
  src?: StaticImageData | string,
  className?: string,
}
export default function CImg({ src = defaultImg, className }: imgType) {
  return (
    <div className={`relative w-full h-full ${className} overflow-hidden`}>
      <Image
        src={src}
        alt='img'
        priority
        sizes="100vw"
        width={100}
        height={100}
        className="w-full h-full object-cover top-0 left-0"
      />
    </div>
  )
}
