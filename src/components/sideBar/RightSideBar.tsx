'use client';

import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Drawer, FormControlLabel, List, ListItem, Typography } from '@mui/material';
import { LightDarkSwitch } from '../lightDarkSwitch/LightDarkSwitch';
import { DrawerButton } from '../buttons/DrawerButton';
import { LogRegButton } from '../buttons/LogRegButton';
import { useThemeStore } from '@/store/useThemeStore';
import { useShallow } from 'zustand/shallow';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export default function RightSideBar({ open, setOpen }: Props) {
    const { currentTheme } = useThemeStore(
        useShallow(state => ({ currentTheme: state.currentTheme }))
    );
    const setTheme = useThemeStore(state => state.setTheme);

    return (
        <>
            <DrawerButton onClick={() => setOpen(true)}>
                <SettingsIcon />
            </DrawerButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <div className="w-[250px] h-full flex flex-col justify-between">
                    <div>
                        <List>
                            <ListItem>
                                <FormControlLabel
                                    control={
                                        <LightDarkSwitch
                                            sx={{ m: 1 }}
                                            checked={currentTheme === 'dark'}
                                            onChange={() =>
                                                setTheme(
                                                    currentTheme === 'light' ? 'dark' : 'light'
                                                )
                                            }
                                        />
                                    }
                                    label={currentTheme === 'light' ? 'Light' : 'Dark'}
                                />
                            </ListItem>
                        </List>
                        <div className="flex flex-col items-center">
                            <LogRegButton
                                onClick={() => setOpen(false)}
                                text="Sign in"
                                href="/login"
                            />
                            <LogRegButton
                                onClick={() => setOpen(false)}
                                text="Register"
                                href="/register"
                            />
                        </div>
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <Button
                            fullWidth
                            variant="outlined"
                            component="a"
                            href="https://github.com/Paveu99"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Owner&apos;s repo
                        </Button>
                        <Typography variant="caption" color="textSecondary" align="center">
                            Application is courtesy of Pawel Jarecki. All rights reserved.
                        </Typography>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
