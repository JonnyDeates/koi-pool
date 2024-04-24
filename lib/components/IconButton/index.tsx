import {ButtonHTMLAttributes} from 'react';
import styles from './styles.module.css';
import globalStyles from '../../styles/styles.module.css';
import {VariantsType} from "../../types/VariantsType.ts";

type IconButtonProps = {
  variant?: VariantsType,
  src: string,
  alt?: string,
  isActive?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function IconButton(iconButtonProps: IconButtonProps) {
  const {
    className = '',
    src,
    isActive = false,
    alt = '',
    variant = 'standard',
    disabled,
    ...standardProps
  } = iconButtonProps;
  const activeClassName = isActive ? `${globalStyles.active}` : '';
  const activeVariant = disabled ? 'disabled' : variant;

  return <button className={`${styles.ButtonIcon} ${globalStyles[activeVariant]} ${className} ${activeClassName}`}
                 disabled={disabled} {...standardProps}>
    <img src={src} alt={alt}/>
  </button>
}
