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

  const currentVariant = !inputProps.value ? 'disabled' : variant


  return <FloatingLabelInput {...divProps} {...inputProps} label={label}>
    <Button {...buttonProps} className={`${styles.FloatingLabelInputButton} ${className}`} variant={currentVariant}
            onClick={onClick}>+</Button>
  </FloatingLabelInput>
  
}