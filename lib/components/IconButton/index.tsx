
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';
import globalStyles from '../../styles/styles.module.css';
import {VariantsType} from "../../types/VariantsType.ts";

type IconButtonProps = {
    variant?: VariantsType,
    src: string,
    alt?: string,
    isActive?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function IconButton(iconButtonProps: IconButtonProps) {
    const { className = '', src, isActive = false, alt='', variant = 'standard', disabled,  ...standardProps } = iconButtonProps;
    const activeClassName = isActive ? `${styles.active}` : '';
    const activeVariant = disabled ? 'disabled' : variant;

    switch (activeVariant) {
        case 'disabled':
            return <button className={`${styles.ButtonIcon} ${styles.disabled} ${className} ${activeClassName}`} disabled {...standardProps}>
                <img src={src} alt={alt}/>
            </button>
        default:
            return <button className={`${styles.ButtonIcon} ${className} ${globalStyles[variant]} ${activeClassName}`}  {...standardProps}>
                <img src={src} alt={alt}/>
            </button>
    }
}
