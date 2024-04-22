"use client";
import { AddFiles, Close, Upload } from '@/assets';
import React, { ChangeEvent, useRef, useState, DragEvent, useCallback } from 'react';
import CImg from '../Image/CImg';

type objImg = {
    name: string,
    url: string,
    file: {}
}
type propsType = {
    multiple?: boolean
}
const acceptImageType = "image/*";

export default function UploadImg({ multiple = true }: propsType) {
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState<Boolean>(false);
    const [images, setImages] = useState<objImg[]>([]);

    const onSelectFile = (): void => {
        fileUploadRef.current?.click();
    }
    const fnSetImg = (files: any) => {
        if (files?.length === 0) return 0;
        for (let i = 0; i < files?.length; i++) {
            if (files[i].type.split("/")[0] !== 'image') continue;
            if (!images.some((e: any) => e.name === files[i].name)) {
                if (!multiple) setImages([{
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                    file: files[i]
                }]);
                else setImages((prevImg: objImg[]) => [...prevImg, {
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                    file: files[i]
                }])
            }
        }
    }
    const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files || [];
        fnSetImg(files);
    }
    const fOnDragOver = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }
    const onDragLeaved = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        setIsDragging(false);
    }
    const onDroped = (event: any) => {
        event.stopPropagation()
        event.preventDefault();
        setIsDragging(false);
        console.log(event.dataTransfer.files);
        const files = event.dataTransfer.files;
        fnSetImg(files);
    }

    const onDelete = (name: string) => {
        setImages((prev: objImg[]) => prev.filter((obj) => obj.name !== name));
    }
    return (
        <div
            onDragOver={fOnDragOver}
            onDragLeave={onDragLeaved}
            onDrop={onDroped}
            className="border-4 border-dotted flex flex-col items-center py-6 w-full space-y-2">
            {images.length > 0 ? '' : <AddFiles className="w-10" />}
            <div className="w-full overflow-auto flex space-x-2 justify-center">
                {images.map((img, i) => (
                    <div key={i} className="w-20 relative">
                        <CImg src={img.url} />
                        <Close className="absolute top-0 right-0 w-5 h-5 z-10 bg-cwhite bg-opacity-40 rounded-full cursor-pointer hover:bg-opacity-100" onClick={() => onDelete(img.name)} />
                    </div>
                ))}
            </div>
            {isDragging ? <p className="bg-red-500">Drag images here</p> : <p>Drag and drop image here OR</p>}
            <input type='file' name="file" multiple={multiple} ref={fileUploadRef} onChange={(e) => onFileSelect(e)} accept={acceptImageType} className="hidden" />
            <button
                type="button"
                className="flex bg-cpink text-cwhite py-2 px-6 rounded-md text-xl space-x-2"
                onClick={onSelectFile}>
                <p>Upload</p>
                <Upload className="w-5 h-5 fill-cwhite" />
            </button>
        </div>
    )
}
