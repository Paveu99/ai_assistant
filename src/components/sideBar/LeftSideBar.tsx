'use client';

import { Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerButton } from '../buttons/DrawerButton';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/explain-code', label: 'Explain Code' },
    { href: '/refactor-code', label: 'Refactor' },
    { href: '/generate-tests', label: 'Generate Tests' },
    { href: '/generate-commit-message', label: 'Commit Message AI' },
    { href: '/walkthrough', label: 'Walkthrough' },
];

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export default function LeftSideBar({ open, setOpen }: Props) {
    const pathname = usePathname();
    const theme = useTheme();

    return (
        <>
            <DrawerButton onClick={() => setOpen(true)}>
                <MenuIcon />
            </DrawerButton>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <div className="flex items-center ml-[15px] mt-[5px]">
                    <DrawerButton onClick={() => setOpen(false)}>
                        <MenuIcon />
                    </DrawerButton>
                    <h1 className="font-bold text-[18px]">Menu</h1>
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
                                    border: `1px solid ${theme.palette.divider}`,
                                    borderRadius: '12px',
                                    px: 2,
                                    py: 1.5,
                                    mb: 1.5,
                                    transition: 'all 0.2s ease-in-out',
                                    backgroundColor:
                                        pathname === href
                                            ? theme.palette.secondary.main
                                            : 'transparent',
                                    transform: pathname === href ? 'scale(1.05)' : 'none',
                                    '&:hover': {
                                        backgroundColor: theme.palette.action.hover,
                                        transform: 'scale(1.05)',
                                        cursor: 'pointer',
                                    },
                                    textDecoration: 'none',
                                    color: theme.palette.text.primary,
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
