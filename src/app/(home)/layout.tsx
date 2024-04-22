'use client'
import React, { useState } from 'react';
import NavLink from './Navlink';
import { Category, Overview, Products, Search, Shopping, User } from '@/assets';
import { usePathname, useRouter } from 'next/navigation';
import Logo from '@/assets/imgs/logo.png';
import CImg from '@/components/Image/CImg';
import CartDrawer from './carts/CartDrawer';
import Footer from './footer/Footer';
import Link from 'next/link';
import Topbar from './TopBanner/Topbar';

const Menus = [
    { name: "Shop", path: NavLink.SHOP, icon: Overview },
    { name: "Blog", path: NavLink.BLOG, icon: Products },
    { name: "About", path: NavLink.ABOUT, icon: Category },
    { name: "Contact", path: NavLink.CONTACT, icon: Category },
]

export default function Layout({ children }: { children: React.ReactNode }) {
    const [showNav, setShowNav] = useState<boolean>(false);
    const [showCard, setShowCard] = useState<Boolean>(false);

    const navigate = useRouter();
    const pathName = usePathname();

    return (
        <div className="relative h-screen w-full overflow-auto flex flex-col">
            <div>
                <Topbar />
            </div>
            {/* Nav bar */}
            <div className="sticky top-0 bg-base1 min-h-[4rem] flex w-full border-t border-t-gray-500 border-b-2  border-b-blue-500  z-50">
                <div className="container text-[1.25rem] uppercase mx-auto flex items-center justify-between text-base3">
                    <div className="flex space-x-8">
                        <div className="flex items-center space-x-4">
                            {Menus.map((m, i) => (
                                <div key={i} className={`${pathName === m.path ? 'border-b border-base3 text-base3' : ''}`}>
                                    <Link href={m.path} className="cursor-pointer">{m.name}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* <User className="stroke-base4 w-7 h-7 cursor-pointer" onClick={() => navigate.push('/profile')} /> */}
                        <div className="relative cursor-pointer" onClick={() => setShowCard(!showCard)}>
                            Login
                        </div>
                    </div>
                </div>
            </div>
            {/* List of cards */}
            <CartDrawer show={showCard} onClose={() => setShowCard(false)} />
            <div className="flex flex-col h-full">
                <div className="flex-1">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )

}
