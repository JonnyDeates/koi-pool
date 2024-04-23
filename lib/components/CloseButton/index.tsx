import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

type CloseButtonProps = {
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function CloseButton(props:CloseButtonProps) {
    const {className = ''} = props;
    return <button {...props} className={`${styles.CloseButton} ${className}`}>X</button>
}
