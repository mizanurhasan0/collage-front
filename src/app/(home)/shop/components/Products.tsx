import React from 'react';
import Card from '../../components/Card';

export default function Products() {
    return (
        <div className="border p-3 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((p) => (<div key={p}><Card /></div>))}
            </div>
            <div>
                Pagination ......
            </div>
        </div>
    )
}
