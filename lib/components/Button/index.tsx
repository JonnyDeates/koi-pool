import {ButtonHTMLAttributes} from 'react'
import styles from './styles.module.css'
import globalStyles from '../../styles/styles.module.css'
import {VariantsType} from "../../types/VariantsType.ts";

type ButtonProps = {
  variant?: VariantsType,
  isActive?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button(buttonProps: ButtonProps) {
  const {className = '', children, isActive = false, variant = 'standard', disabled, ...standardProps} = buttonProps;

  const activeClassName = isActive ? `${styles.active}` : '';
  const activeVariant = disabled ? "disabled" : variant;

  switch (activeVariant) {
    case 'disabled':
      return <button className={`${styles.Button} ${globalStyles.disabled} ${className}`} disabled {...standardProps}>
        {children}
      </button>;
    default:
      return <button
        className={`${styles.Button}  ${globalStyles[variant]} ${className} ${activeClassName}`} {...standardProps}>
        {children}
      </button>;
  }
}