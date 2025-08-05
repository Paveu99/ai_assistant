import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { Button } from '@mui/material';
import Link from 'next/link';

type Props = {
    text: string;
    href: string;
    onClick?: () => void;
};

export const LogRegButton = ({ text, href, onClick }: Props) => {
    return (
        <Button
            onClick={onClick}
            className={styles.buttonLogReg}
            variant="outlined"
            component={Link}
            sx={{
                marginBottom: "5px"
            }}
            href={href}
            rel="noopener noreferrer"
        >
            {text}
        </Button>
    );
};
