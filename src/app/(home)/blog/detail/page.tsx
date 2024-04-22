import CImg from '@/components/Image/CImg';
import React from 'react';
import defaultImg from '@/assets/imgs/Delivery2.jpg';

export default function page() {
    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-center">
                <div>
                    <CImg src={defaultImg} />
                </div>
            </div>
            <div className="space-y-4">

                <h1 className="text-center text-4xl font-TT">Your most unhappy customers are your greatest source of learning.</h1>
                <p className="text-center text-sm opacity-50">July 2, 2020</p>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
            </div>
        </div>
    )
}
