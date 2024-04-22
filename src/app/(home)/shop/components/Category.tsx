import React from 'react'

export default function Category() {
    return (
        <div className="border min-w-[10rem] ">
            <div className="flex items-center justify-between text-sm border-b-2 p-3 font-medium">
                <p>Filter</p>
                <p className="bg-base4 bg-opacity-20 rounded-lg px-3">Reset</p>
            </div>
            <div className="p-3 text-sm">
                <p className="font-medium pb-3">Category</p>
                <div className="space-y-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
                        <div key={d} className="flex items-center space-x-2 opacity-75">
                            <input type="checkbox" />
                            <p>Panjabi</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
