import { Facebook, Github, Linkedin, Location, Mail, Telephone, Twitter } from '@/assets';
import CInput from '@/components/input/CInput';
import React from 'react';

export default function Footer() {
    return (
        <>
            <div className="bg-base5 text-base1 py-8">
                <div className="px-2 xl:px-0 container mx-auto grid  xl:grid-cols-3 gap-10">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-base4 rounded-full">
                                <Location className="fill-white p-1" />
                            </div>
                            <p className="font-semibold">15/3 Road-17 , Mirpur-12,Dhaka</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-base4 rounded-full">
                                <Telephone className="fill-white p-2" />
                            </div>
                            <p className="font-semibold">+880 17XXXXXXX</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-base4 rounded-full">
                                <Mail className="fill-white p-1" />
                            </div>
                            <p className="font-semibold text-base3">mail@gmail.com</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-semibold capitalize">About the company</h2>
                        <p className="text-sm text-base2">Your about page summarizes your history, values, and mission — all in one place. That’s a tall order for just a few paragraphs. If you’re feeling stuck, turn to these about-page examples for inspiration.</p>
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-base4">
                                <Facebook className="fill-white p-2 w-10 h-10" />
                            </div>
                            <div className="w-10 h-10 bg-base4">
                                <Twitter className="fill-white p-2 w-10 h-10" />
                            </div>
                            <div className="w-10 h-10 bg-base4">
                                <Linkedin className="fill-white p-2 w-10 h-10" />
                            </div>
                            <div className="w-10 h-10 bg-base4">
                                <Github className="fill-white p-2 w-10 h-10" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2>Subscription</h2>
                        <div>
                            <CInput />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-base2 text-base3 text-sm font-bold capitalize text-center">
                <p>© Copyright softwareBD</p>
            </div>
        </>
    )
}
