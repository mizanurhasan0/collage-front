import Link from 'next/link';
import React from 'react';

type objType = {
    pathName: string,
    option: {
        icon?: any,
        name?: string,
        path: string,
    },
}

export default function CLinks({ pathName = '', option = { path: '' } }: objType) {
    const isActive = pathName.startsWith(option.path || '');
    // const isActive = pathName === option.path || '';

    return (
        <Link className={`${isActive ? 'w-full bg-cpink ' : ''} flex font-medium text-base px-7 py-4 text-cwhite`}
            href={option?.path || ''}>
            <div className="flex items-center space-x-4">
                <option.icon className={`${isActive ? '' : ''} w-7 h-7 fill-cwhite`} />
                <p className="whitespace-nowrap tracking-wide md:w-20 xl:w-auto truncate">{option?.name || ''}</p>
            </div>
        </Link>
    )
}
