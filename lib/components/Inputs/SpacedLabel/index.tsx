import {DetailedHTMLProps, HTMLAttributes, LabelHTMLAttributes, ReactNode} from "react";
import styles from './styles.module.css'
type SpacedLabelProps = {
  label: string,
  labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
  children?: ReactNode,
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function SpacedLabel({label, labelProps = {}, children, ...divProps}: SpacedLabelProps) {

  const {className = ''} = divProps;

  return <div {...divProps} className={`${styles.SpacedLabel} ${className}`}>
    <label {...labelProps}>{label}</label>
    {children}
  </div>
}