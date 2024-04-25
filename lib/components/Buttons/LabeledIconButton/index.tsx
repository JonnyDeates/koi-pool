import {ButtonHTMLAttributes} from "react";
import styles from "./styles.module.css"
import {VariantsType} from "../../../types/VariantsType.ts";
import globalStyles from "../../../styles/styles.module.css";

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

  const activeClassName = isActive ? `${globalStyles.active}` : '';
  const activeVariant = disabled ? "disabled" : variant;

  return <button
    className={`${styles.LabeledIconButton}  ${globalStyles[activeVariant]} ${className} ${activeClassName}`}
    disabled={disabled} {...standardProps}>
    <img src={src} alt={alt ?? label}/>
    <span>{label}</span>
  </button>;
}
