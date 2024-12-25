import {HTMLAttributes} from 'react'
import styles from './styles.module.css'
import {Button, ButtonProps} from "../Button";
import checked from './assets/check.svg'
import unchecked from './assets/unchecked.svg'

export type CheckedButtonProps = {
  wrapperImgProps?: HTMLAttributes<HTMLDivElement>,
  imgProps?: HTMLAttributes<HTMLImageElement>,
} & ButtonProps

export function CheckedButton(checkedButtonProps: CheckedButtonProps ) {
  const {isActive, children, className = '',imgProps = {}, wrapperImgProps = {}, ...buttonProps} = checkedButtonProps

  const imageSelected = isActive ?  checked : unchecked;
  const altSelected = isActive ? 'Checked' :'Unchecked'

  const {className: imageWrapperClassName = ''} = wrapperImgProps;
  const {className: imgClassName = ''} = imgProps;

  return <Button isActive={isActive} {...buttonProps} className={`${styles.CheckButton} ${className}`}>
    <div {...wrapperImgProps} className={`${styles.Checkbox} ${imageWrapperClassName}`}>
      <img src={imageSelected} alt={altSelected} {...imgProps} className={`${styles.CheckboxImage} ${imgClassName}`}  />
    </div>

    {children}
  </Button>
}