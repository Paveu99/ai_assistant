import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
    children: ReactNode;
    onClick?: () => void;
};

export const DrawerButton = ({ children, onClick }: Props) => {
    return (
        <button className={styles.buttonIcon} onClick={onClick}>
            {children}
        </button>
    );
};
