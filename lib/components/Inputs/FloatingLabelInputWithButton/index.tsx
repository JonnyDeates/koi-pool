import styles from './styles.module.css'
import {FloatingLabelInput, FloatingLabelInputProps} from "../FloatingLabelInput";
import {Button, ButtonProps } from "../../Buttons/Button";
import {HTMLAttributes, MouseEventHandler} from 'react';
import plus from './assets/plus.svg'

type FloatingLabelInputWithButtonProps =
  {
    onClick: MouseEventHandler<HTMLButtonElement> | undefined,
      buttonProps?: ButtonProps,
      buttonImgProps?: HTMLAttributes<HTMLImageElement>,
  } & FloatingLabelInputProps

export function FloatingLabelInputWithButton({
                                               divProps,
                                               onClick,
                                               label,
                                               labelProps,
                                               buttonProps = {},
                                                 buttonImgProps = {},
                                               ...inputProps
                                             }: FloatingLabelInputWithButtonProps) {



    const {className = '', variant = 'accept'} = buttonProps;
    const {className: imageClassName = ''} = buttonImgProps;

  const isButtonDisabled = !inputProps.value
  const currentVariant = isButtonDisabled ? 'disabled' : variant


  return <FloatingLabelInput divProps={divProps} {...inputProps} label={label} labelProps={labelProps}>
    <Button {...buttonProps} className={`${styles.FloatingLabelInputButton} ${className}`} variant={currentVariant}
            disabled={isButtonDisabled}
            onClick={onClick}>
        <img {...buttonImgProps} src={plus} alt={'+'} className={`${styles.FloatingLabelInputButtonImage} ${imageClassName}`}/>
    </Button>
  </FloatingLabelInput>
  
}