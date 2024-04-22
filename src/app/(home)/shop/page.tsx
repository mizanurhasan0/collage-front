import React from 'react';
import Card from '../components/Card';
import Category from './components/Category';
import Products from './components/Products';

export default function page() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center py-4">
                <p className="font-semibold opacity-50">Showing 2344 results for</p>
                <div className="flex items-center space-x-3">
                    <p className="border px-3 py-2 rounded-md">Sort By</p>
                    <p className="border px-3 py-2 rounded-md">Price</p>
                </div>
            </div>
            <div className="flex space-x-4">
                <Category />
                <Products />
            </div>
        </div >
    )
}
