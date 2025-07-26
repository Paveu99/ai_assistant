'use client';

import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerButton } from '../buttons/DrawerButton';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/chat', label: 'Chat' },
    { href: '/history', label: 'History' },
    { href: '/tests', label: 'Tests' },
    { href: '/tools', label: 'Tools' },
    { href: '/settings', label: 'Settings' },
];

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export default function LeftSideBar({ open, setOpen }: Props) {
    const pathname = usePathname();

    return (
        <>
            <DrawerButton onClick={() => setOpen(true)}>
                <MenuIcon />
            </DrawerButton>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <div className="ml-[15px] mt-[5px]">
                    <DrawerButton onClick={() => setOpen(false)}>
                        <MenuIcon />
                    </DrawerButton>
                </div>
                <div className="w-[250px] h-full flex flex-col justify-between items-center">
                    <List className="w-[220px]">
                        {navLinks.map(({ href, label }) => (
                            <ListItem
                                key={href}
                                onClick={() => setOpen(false)}
                                component={Link}
                                href={href}
                                sx={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '12px',
                                    px: 2,
                                    py: 1.5,
                                    mb: 1.5,
                                    transition: 'all 0.2s ease-in-out',
                                    backgroundColor: pathname === href ? '#bbdefb' : 'transparent',
                                    transform: pathname === href ? 'scale(1.05)' : 'none',
                                    '&:hover': {
                                        backgroundColor: '#e3f2fd',
                                        transform: 'scale(1.05)',
                                        cursor: 'pointer',
                                    },
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                <ListItemText primary={label} />
                            </ListItem>
                        ))}
                    </List>

                    <Image
                        src="/AI-Assistant-For-Developers.jpg"
                        alt="AI Assistant Logo"
                        width={150}
                        height={75}
                        className="object-contain my-4 mx-auto rounded-2xl"
                    />
                </div>
            </Drawer>
        </>
    );
}
