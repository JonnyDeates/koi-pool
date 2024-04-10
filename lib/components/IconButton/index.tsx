
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';

type IconButtonProps = {
    className?: string,
    variants?: 'standard' | 'disabled',
    src: string,
    alt?: string,
    isActive?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function IconButton(iconButtonProps: IconButtonProps) {
    const { className = '', src, isActive = false, alt='', variants = 'standard', ...standardProps } = iconButtonProps;
    const activeClassName = isActive ? `${styles.active}` : ''

    switch (variants) {
        case 'disabled':
            return <button className={`${styles.ButtonIcon} ${styles.disabled} ${className} ${activeClassName}`} disabled {...standardProps}>
                <img src={src} alt={alt}/>
            </button>

        default:
            return <button className={`${styles.ButtonIcon} ${className} ${activeClassName}`}  {...standardProps}>
                <img src={src} alt={alt}/>
            </button>
    }
}
