import type {FormEvent, HTMLAttributes, ReactNode, KeyboardEvent, CSSProperties} from "react";
import styles from './styles.module.css'
const handleSubmitEnter = (event: KeyboardEvent, callback: (event: FormEvent<HTMLFormElement>) => void) => {
    if (event.key === "Enter") {
        event.preventDefault();
        callback(event as KeyboardEvent<HTMLFormElement>);
    }
};
export interface OptionProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'value' | 'style'> {
    children: ReactNode,
    value: T,
    onClick: (value: T) => void,
    isActive: boolean,
    key: string,
    style?: CSSProperties | ((value: T) => CSSProperties)
}

export function Option<T, >({children, value, onClick, isActive, ...optionAttributes}: OptionProps<T>) {

    const {className = '', role='option', style, ...optionAttributesWithoutClassName} = optionAttributes;
    const handleClick = () => {
        onClick(value);
    };
    const activeClassname = isActive ? styles.active : '';

    return <div className={`${styles.Option} ${activeClassname} ${className}`} role={role}
                onClick={handleClick} style={typeof style === 'function' ? style(value) : style}
                aria-selected={isActive}
                tabIndex={0}
                onKeyDown={(event) => {
                    handleSubmitEnter(event, handleClick);
                }} {...optionAttributesWithoutClassName}>
        {children}
    </div>;
}