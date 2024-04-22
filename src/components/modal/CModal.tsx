
import { Close } from '@/assets';
import React, { useRef } from 'react';

type CType = {
    show?: boolean,
    onClose?: any,
    children?: string | JSX.Element | JSX.Element[],
}
export default function CModal({ show = true, onClose, children }: CType) {
    const refModal = useRef<HTMLDivElement>(null)
    const onClosing = (e: any) => {
        if (refModal?.current?.contains && !refModal.current.contains(e.target)) {
            onClose();
        }
    }
    return (
        <div className={`absolute dark:text-info ${show ? '' : 'scale-0'}`} onClick={onClosing}>
            <div className="fixed z-[999] top-0 bottom-0 left-0 right-0 bg-[#0000008c]">
                <div className={`fixed flex w-full h-full items-center justify-center duration-300 ${show ? '-top-[0px]' : '-top-[50px]'}`}>
                    <div ref={refModal} className="relative bg-white dark:bg-darkSideBar rounded-lg p-6 min-w-[95vw] lg:min-w-[30vw]">
                        <div className="flex justify-end">
                            <Close onClick={onClose} className="fill-primary dark:stroke-info cursor-pointer h-5 w-5 m-[0.625rem]" />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}