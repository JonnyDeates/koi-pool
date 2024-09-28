import {useState, type HTMLAttributes, type KeyboardEvent, type FormEvent} from "react";
import styles from "./styles.module.css";
import {Option} from "./Option";

const handleSubmitEnter = (event: KeyboardEvent, callback: (event: FormEvent<HTMLFormElement>) => void) => {
    if (event.key === "Enter") {
        event.preventDefault();
        callback(event as KeyboardEvent<HTMLFormElement>);
    }
};
export interface SelectProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    options: Record<string, T> | T[],
    selectedOption: T,
    onClick: (value: T) => void,
    containerAttributes?: HTMLAttributes<HTMLDivElement>,
    backdropAttributes?: HTMLAttributes<HTMLDivElement>,
    selectedOptionAttributes?: HTMLAttributes<HTMLDivElement>,
    optionAttributes?: Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'onClick'>
}

export function Select<T extends string | number | symbol, >(
    {
        options, selectedOption, onClick,
        selectedOptionAttributes = {},
        optionAttributes = {},
        backdropAttributes = {},
        containerAttributes = {},
        ...selectAttributes

    }: SelectProps<T>) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [startClosingAnimation, setStartClosingAnimation] = useState<boolean>(false);
    const handleOpenSelect = () => {
        if (isOpen) {
            setStartClosingAnimation(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 300);
        } else {
            setIsOpen(true);
            setStartClosingAnimation(false);
        }
    };

    const opacity = startClosingAnimation ? 0 : 1;
    const transform = startClosingAnimation ? 'scale(0.9,0.3)' : 'none';
    const {className = '', style = {}, ...selectAttributesWithoutClassName} = selectAttributes;
    const {className: containerClassName = '', ...containerWithoutClassNameAttributes} = containerAttributes;
    const {className: selectedOptionClassName = '', role: selectedOptionRole = 'button', ...selectedOptionAttributesWithoutClassName} = selectedOptionAttributes;
    const {className: backdropClassName= '', role: backdropRole = 'presentation', ...backdropAttributesWithoutClassName} = backdropAttributes;

    return <div className={`${styles.SelectContainer} ${containerClassName}`}
                {...containerWithoutClassNameAttributes}
    >
        <div className={`${styles.SelectedOption} ${selectedOptionClassName}`}
             onClick={handleOpenSelect} role={selectedOptionRole} tabIndex={0}
             onKeyDown={(event) => {
                 handleSubmitEnter(event, handleOpenSelect);
             }} {...selectedOptionAttributesWithoutClassName}>
            {selectedOption.toString()}
        </div>
        {isOpen ?
            <>
                <div className={`${styles.Backdrop} ${backdropClassName}`}
                     onClick={handleOpenSelect}
                     role={backdropRole}
                     onKeyDown={(event) => {
                         handleSubmitEnter(event, handleOpenSelect);
                     }} {...backdropAttributesWithoutClassName}/>
                <div className={`${styles.Select} ${className}`}
                     style={{opacity, transform, ...style}}
                     {...selectAttributesWithoutClassName}>
                    {
                        Array.isArray(options)
                            ? options.map((option) =>
                                <Option key={`Option-${option.toString()}`} value={option} onClick={onClick}
                                        isActive={option === selectedOption} {...optionAttributes}>
                                    {option.toString()}
                                </Option>)
                            : Object.keys(options).map((option) =>
                                <Option key={`Option-${option}`} value={options[option]} onClick={onClick}
                                        isActive={option === selectedOption} {...optionAttributes}>
                                    {option}
                                </Option>)
                    }
                </div>
            </>
            : <></>
        }
    </div>;
}

export default Select;