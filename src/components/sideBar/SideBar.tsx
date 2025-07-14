'use client';

import { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, SvgIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/chat', label: 'Chat' },
    { href: '/history', label: 'History' },
    { href: '/tests', label: 'Tests' },
    { href: '/tools', label: 'Tools' },
    { href: '/settings', label: 'Settings' }
];

export default function SideBar() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <SvgIcon>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" onClick={() => setOpen(true)} />
            </SvgIcon>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <List sx={{ width: 250 }}>
                    {navLinks.map(({ href, label }) => (
                        <ListItem key={href} onClick={() => setOpen(false)}>
                            <Link href={href} >
                                <ListItemText primary={label} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}
