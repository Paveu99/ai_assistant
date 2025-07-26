'use client';

import { useTheme } from '@/context/ThemeContext';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Drawer, FormControlLabel, List, ListItem, Typography } from '@mui/material';
import { LightDarkSwitch } from '../lightDarkSwitch/LightDarkSwitch';
import { DrawerButton } from '../buttons/DrawerButton';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

export default function RightSideBar({ open, setOpen }: Props) {
    const { currentTheme, toggleTheme } = useTheme();

    return (
        <>
            <DrawerButton onClick={() => setOpen(true)}>
                <SettingsIcon />
            </DrawerButton>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <div className="w-[250px] h-full flex flex-col justify-between">
                    <List>
                        <ListItem>
                            <FormControlLabel
                                control={
                                    <LightDarkSwitch
                                        sx={{ m: 1 }}
                                        checked={currentTheme === 'dark'}
                                        onChange={toggleTheme}
                                    />
                                }
                                label={currentTheme === 'light' ? 'Light' : 'Dark'}
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
                        <Typography variant="caption" color="textSecondary" align="center">
                            Application is courtesy of Pawel Jarecki. All rights reserved.
                        </Typography>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
