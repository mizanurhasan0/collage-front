'use client';
import React from 'react'
import Banner from '../../Home/Banner'
import Post from '../components/Post'
import CBtn from '@/components/button/CBtn'
import { useRouter } from 'next/navigation';

export default function Blog() {

    const navigate = useRouter();

    return (
        <div className="">
            <Banner />
            <div className="px-2 container md:mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-6 py-16">
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <div key={d} onClick={() => navigate.push('blog/detail')}>
                        <Post />
                    </div>
                ))}
            </div>
            <div className="flex justify-center pb-10">
                <div>
                    <CBtn type="button" className="px-6"><p className="font-semibold tracking-wider">Load More...</p></CBtn>
                </div>
            </div>
        </div>
    )
}
