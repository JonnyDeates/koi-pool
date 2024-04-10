import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.css'

type ButtonProps = {
    className?: string,
    variants?: 'cancel' | 'standard' | 'disabled',
    children: ReactNode,
    isActive?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
export function Button(buttonProps: ButtonProps) {
    const { className = '', children, isActive = false, variants = 'standard', ...standardProps} = buttonProps;

    const activeClassName = isActive ? `${styles.active}` : ''
    
    switch(variants){
        case 'disabled': 
            return <button className={`${styles.Button} ${styles.disabled} ${className}`} disabled {...standardProps}>{children}</button>
        case "cancel": 
            return <button className={`${styles.Button}  ${styles.cancel} ${className} ${activeClassName}`}  {...standardProps} >{children}</button>
        default:
            return <button className={`${styles.Button}  ${styles.standard} ${className} ${activeClassName}`} {...standardProps}>{children}</button>
    } 
}