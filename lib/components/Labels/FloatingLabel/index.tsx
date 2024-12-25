import {DetailedHTMLProps, LabelHTMLAttributes} from 'react'
import styles from './styles.module.css'

export type FloatingLabelProps = {
  isFloating?: boolean,
} & DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

export function FloatingLabel(labelProps: FloatingLabelProps) {
  const {className = '', isFloating = true, children, ...standardProps} = labelProps;

  const {className: labelClassName = ''} = labelProps;

  return <label {...standardProps}
                className={`${styles.FloatingLabel} ${isFloating ? `${styles.float}` : ""} ${labelClassName}`}>
    {children}
  </label>
}