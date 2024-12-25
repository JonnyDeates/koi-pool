import {DetailedHTMLProps, FocusEventHandler, HTMLAttributes, useState} from "react";
import {Input, InputProps} from "../Input";
import styles from './styles.module.css'
import {FloatingLabel, FloatingLabelProps} from "../../Labels/FloatingLabel";

export type FloatingLabelInputProps =
  {
    label: string,
    labelProps?: FloatingLabelProps,
    divProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  }
  & InputProps

export function FloatingLabelInput({divProps = {}, label, labelProps = {},children, ...inputProps}: FloatingLabelInputProps) {

  const {className = ''} = divProps;

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

  return <div {...divProps} className={`${styles.FloatingLabelInput} ${className}`} >
    <FloatingLabel isFloating={isFloating} {...labelProps}>
      {label}
    </FloatingLabel>
    <Input {...inputProps} onFocus={handleFocus} onBlur={handleBlur} />
    {children}
  </div>
}