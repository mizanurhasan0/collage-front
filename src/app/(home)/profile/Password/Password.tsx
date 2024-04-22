import CBtn from '@/components/button/CBtn';
import CModal from '@/components/modal/CModal';
import React from 'react';

type cType = {
    setState?: any,
    onClose?: () => void
}

export default function Password({ setState = () => { }, onClose }: cType) {
    return (
        <CModal onClose={onClose}>
            <div className="pt-11 px-11 space-y-2">
                <h2 className=" text-2xl font-bold text-gray">Change Your Password</h2>
                <p className="text-sm">Your new password must be defferent from previous used passwords</p>
            </div>
            <div className=" p-11 space-y-4">
                <input type="text" placeholder="Current Password" className="py-2 w-full outline-none border-b border-gray border-opacity-50" />
                <input type="text" placeholder="Confirm Current Password" className="py-2 w-full outline-none border-b border-gray border-opacity-50" />
                <input type="text" placeholder="New Password" className="py-2 w-full outline-none border-b border-gray border-opacity-50" />
                <input type="text" placeholder="Confirm New Password" className="py-2 w-full outline-none border-b border-gray border-opacity-50" />
                <div className="text-right">
                    <p>Dont remember current passowrd? <span className="text-primary font-semibold cursor-pointer">Send Code</span> </p>
                </div>
            </div>
            <div className="px-11 pb-5">
                <CBtn className="h-16 w-full" onClick={() => setState((prev: any) => ({ ...prev, otp: true, pass: false }))}>Update Password</CBtn>
            </div>
        </CModal>
    )
}
