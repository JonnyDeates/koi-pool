import {DetailedHTMLProps, FocusEventHandler, HTMLAttributes, LabelHTMLAttributes, useState} from "react";
import {Input, InputProps} from "../Input";
import styles from './styles.module.css'

export type FloatingLabelInputProps =
  {
    label: string,
    labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
    divProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  }
  & InputProps

export function FloatingLabelInput({divProps = {}, label, labelProps = {},children, ...inputProps}: FloatingLabelInputProps) {

  const {className = ''} = divProps;
  const {className: labelClassName = ''} = labelProps;

  const [isFloating, setIsFloating] = useState<boolean>(!!inputProps.value);

  const handleFocus:FocusEventHandler<HTMLInputElement> = (event)=>{
    if(inputProps.onFocus) {
      inputProps.onFocus(event)
    }
    setIsFloating(true)
  }
  const handleBlur:FocusEventHandler<HTMLInputElement> = (event)=>{
    if(inputProps.onBlur) {
      inputProps.onBlur(event)
    }
    setIsFloating(!!inputProps.value)
  };

  return <div className={`${styles.FloatingLabelInput} ${className}`} {...divProps}>
    <label className={`${styles.FloatingLabel} ${isFloating ? `${styles.float}` : ""} ${labelClassName}`} {...labelProps}>
      {label}
    </label>
    <Input onFocus={handleFocus} onBlur={handleBlur} {...inputProps}/>
    {children}
  </div>
}