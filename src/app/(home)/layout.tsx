'use client'
import React, { useState } from 'react';
import CartDrawer from './carts/CartDrawer';
import Footer from './footer/Footer';
import Topbar from './TopBanner/Topbar';
import Navbar from '@/components/navbar/Navbar';


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="relative h-screen w-full overflow-auto flex flex-col">
            <div>
                <Topbar />
            </div>
            {/* Nav bar */}
            <Navbar />

            <div className="flex flex-col h-full">
                <div className="flex-1">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )

}
