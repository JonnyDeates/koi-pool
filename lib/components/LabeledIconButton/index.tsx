import {ButtonHTMLAttributes} from "react";
import styles from "./styles.module.css"
import {VariantsType} from "../../types/VariantsType.ts";
import globalStyles from "../Button/styles.module.css";

export type LabeledIconButtonProps =
  { variant?: VariantsType, isActive?: boolean, src: string, label: string, alt?: string, }
  & ButtonHTMLAttributes<HTMLButtonElement>

export function LabeledIconButton(buttonProps: LabeledIconButtonProps) {
  const {
    className = '',
    isActive = false,
    variant = 'standard',
    disabled,
    src,
    alt,
    label,
    ...standardProps
  } = buttonProps;

  const activeClassName = isActive ? `${styles.active}` : '';
  const activeVariant = disabled ? "disabled" : variant;

  switch (activeVariant) {
    case 'disabled':
      return <button className={`${styles.LabeledIconButton}  ${globalStyles[variant]}  ${className} ${isActive ? "active" : ""}`} disabled {...standardProps} >
        <img src={src} alt={alt ?? label}/>
        <span>{label}</span>
      </button>;
    default:
      return <button
        className={`${styles.LabeledIconButton}  ${globalStyles[variant]} ${className} ${activeClassName}`} {...standardProps}>
        <img src={src} alt={alt ?? label}/>
        <span>{label}</span>
      </button>;
  }
}
