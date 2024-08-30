import {InputHTMLAttributes} from "react";
import styles from './styles.module.css'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & { error?: string }

export function Input(props: InputProps) {
    const {className = '', width = "90px", height = "fit-content", error = ''} = props;

    const errorClassName = error.length > 0 ? styles.InputError : ''
    const inputClassName = `${styles.Input} ${errorClassName} ${className}`

    return <input style={{...props.style, width, height}}  {...props} className={inputClassName}/>
}