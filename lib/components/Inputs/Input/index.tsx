import {HTMLAttributes, InputHTMLAttributes} from "react";
import styles from './styles.module.css'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string,
    errorProps?: HTMLAttributes<HTMLParagraphElement>
}

export function Input(props: InputProps) {
    const {className = '', width = "90px", height = "fit-content", error = '', errorProps = {}} = props;
    const {className: errorClassName = ''} = errorProps;

    const inputErrorClassName = error.length > 0 ? styles.InputError : ''
    const inputClassName = `${styles.Input} ${inputErrorClassName} ${className}`

    return <div className={styles.InputWrapper}>
        <input style={{...props.style, width, height}}  {...props} className={inputClassName}/>
        {error
            ? <p {...errorProps} className={`${styles.Error} ${errorClassName}`}>{error}</p>
            : <></>}
    </div>
}