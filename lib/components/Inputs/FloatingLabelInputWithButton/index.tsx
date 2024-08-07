import styles from './styles.module.css'
import {FloatingLabelInput, FloatingLabelInputProps} from "../FloatingLabelInput";
import {Button, ButtonProps } from "../../Buttons/Button";
import { MouseEventHandler } from 'react';

type FloatingLabelInputWithButtonProps =
  {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined,
    buttonProps?: ButtonProps,
  } & FloatingLabelInputProps

export function FloatingLabelInputWithButton({
                                               divProps,
                                               onClick,
                                               label,
                                               labelProps,
                                               buttonProps = {},
                                               ...inputProps
                                             }: FloatingLabelInputWithButtonProps) {



  const {className = '', variant = 'accept'} = buttonProps;


  const isButtonDisabled = !inputProps.value
  const currentVariant = isButtonDisabled ? 'disabled' : variant


  return <FloatingLabelInput divProps={divProps} {...inputProps} label={label} labelProps={labelProps}>
    <Button {...buttonProps} className={`${styles.FloatingLabelInputButton} ${className}`} variant={currentVariant}
            disabled={isButtonDisabled}
            onClick={onClick}>+</Button>
  </FloatingLabelInput>
  
}