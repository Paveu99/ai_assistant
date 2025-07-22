'use client';

import { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, SvgIcon, styled, FormControlLabel, Button, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import { LightDarkSwitch } from '../lightDarkSwitch/LightDarkSwitch';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/chat', label: 'Chat' },
    { href: '/history', label: 'History' },
    { href: '/tests', label: 'Tests' },
    { href: '/tools', label: 'Tools' },
    { href: '/settings', label: 'Settings' }
];

export default function SideBar() {
    const [open, setOpen] = useState<boolean>(false);
    const [open2, setOpen2] = useState<boolean>(false);
    const { currentTheme, toggleTheme } = useTheme();
    const pathname = usePathname();

    return (
        <>
            <button onClick={() => setOpen(true)} >
                <SvgIcon>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
            </button>
            <button onClick={() => setOpen2(true)}>
                <SettingsIcon />
            </button>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <div className="w-[250px] h-full flex flex-col justify-between items-center">
                    <List className="w-[220px]">
                        {navLinks.map(({ href, label }) => (
                            <ListItem
                                key={href}
                                onClick={() => setOpen(false)}
                                component={Link}
                                href={href}
                                sx={{
                                    border: "1px solid #e0e0e0",
                                    borderRadius: "12px",
                                    px: 2,
                                    py: 1.5,
                                    mb: 1.5,
                                    transition: "all 0.2s ease-in-out",
                                    backgroundColor: pathname === href ? "#bbdefb" : "transparent",
                                    transform: pathname === href ? "scale(1.05)" : "none",
                                    '&:hover': {
                                        backgroundColor: "#e3f2fd",
                                        transform: "scale(1.05)",
                                        cursor: "pointer",
                                    },
                                    textDecoration: "none",
                                    color: "inherit",
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
                        className='object-contain my-4 mx-auto rounded-2xl'
                    />
                </div>
            </Drawer>
            <Drawer anchor='right' open={open2} onClose={() => setOpen2(false)}>
                <div className="w-[250px] h-full flex flex-col justify-between">
                    <List>
                        <ListItem>
                            <FormControlLabel
                                control={<LightDarkSwitch
                                    sx={{ m: 1 }}
                                    checked={currentTheme === 'dark'}
                                    onChange={toggleTheme}
                                />}
                                label={currentTheme === "light" ? "Light" : "Dark"}
                            />
                        </ListItem>
                    </List>
                    <div className="p-4 flex flex-col gap-2">
                        <Button
                            fullWidth
                            variant="outlined"
                            component="a"
                            href="https://github.com/Paveu99"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Owner's repo
                        </Button>
                        <Typography
                            variant="caption"
                            color="textSecondary"
                            align="center"
                        >
                            Application is courtesy of Pawel Jarecki. All rights reserved.
                        </Typography>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
