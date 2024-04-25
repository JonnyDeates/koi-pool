import styles from './styles.module.css'
import {FloatingLabelInput, FloatingLabelInputProps} from "../FloatingLabelInput";
import {Button, ButtonProps } from "../../Buttons/Button";

type FloatingLabelInputWithButtonProps =
  {
    onClick: () => void,
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

  return <FloatingLabelInput {...divProps} {...inputProps} label={label}>
    <Button {...buttonProps} className={`${styles.FloatingLabelInputButton} ${className}`} variant={variant}
            onClick={onClick}>+</Button>
  </FloatingLabelInput>
}