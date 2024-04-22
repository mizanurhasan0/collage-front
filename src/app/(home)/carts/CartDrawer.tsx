import { Close } from '@/assets';
import React, { useEffect, useRef } from 'react';
import CartItem from './CartItem';
import CBtn from '@/components/button/CBtn';
import { useRouter } from 'next/navigation';

type cType = {
    show?: Boolean,
    onClose?: any,
}

export default function CartDrawer({ show = false, onClose = () => { } }: cType) {
    const refCart = useRef<any>();
    const navigate = useRouter();

    useEffect(() => {
        const outSideClick = (e: any) => {
            if (refCart.current && !refCart.current?.contains(e.target)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", outSideClick);
        return () => document.removeEventListener('mousedown', outSideClick);
    }, []);

    return (
        <div className={`fixed w-full h-screen bg-base2 bg-opacity-40 top-0 right-0 left-0 z-10 ${!show ? 'translate-x-full' : 'translate-x-0'}`}
        >
            <div ref={refCart} className={`p-4 w-96 bg-base1 border-r shadow-2xl absolute duration-500 right-0 h-screen
            flex flex-col ${!show ? 'translate-x-full' : 'translate-x-0'}`}>
                {/* 1st part */}
                <div className="flex justify-between">
                    <h1 className="text-2xl">Your Cart</h1>
                    <Close className="w-7 h-7 cursor-pointer" onClick={onClose} />
                </div>
                {/* 2nd part */}
                <div className="py-5 overflow-auto flex-1">
                    <CartItem />
                </div>
                {/* 3rd part */}
                <div className="border-t-2 border-base4 border-opacity-50" onClick={() => navigate.push('deliveryForm')}>
                    <div className="flex items-center justify-between py-2">
                        <p className="text-2xl font-medium">Subtotal</p>
                        <p>25.00 Take</p>
                    </div>
                    <CBtn>Checkout</CBtn>
                </div>
            </div>
        </div>
    )
}
