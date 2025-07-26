'use client';

import Image from 'next/image';
import LeftSideBar from '../sideBar/LeftSideBar';
import { useState } from 'react';
import RightSideBar from '../sideBar/RightSideBar';

export const TopBar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [open2, setOpen2] = useState<boolean>(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white px-4 py-3 flex items-center">
            <LeftSideBar open={open} setOpen={setOpen} />
            <Image
                src="/AI-Assistant-For-Developers.jpg"
                alt="AI Assistant Logo"
                width={40}
                height={20}
                className="rounded-2xl"
            />
            <h1 className="mx-2 flex-grow font-semibold">AI Assistant for Developers</h1>
            <RightSideBar open={open2} setOpen={setOpen2} />
        </header>
    );
};
