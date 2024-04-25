import {HTMLAttributes, ReactNode} from "react"
import {CloseButton} from "../../Buttons/CloseButton"
import styles from './styles.module.css'

export type GenericModalBaseProps = {
  handleClose: () => void, isOpen: boolean, children: ReactNode,
  modalAttributes?: HTMLAttributes<HTMLDivElement>,
  modalWrapperAttributes?: HTMLAttributes<HTMLDivElement>,
}

export function GenericModalBase({
                                   handleClose,
                                   isOpen,
                                   children,
                                   modalAttributes = {},
                                   modalWrapperAttributes = {}
                                 }: GenericModalBaseProps) {

  if (!isOpen) {
    return <></>
  }

  const {className = ''} = modalAttributes
  const {className: modalWrapperClassName = ''} = modalWrapperAttributes

  return <>
    <div role='presentation' className={`${styles.ModalWrapper }${modalWrapperClassName}`} onClick={handleClose}/>
    <div {...modalAttributes} className={`${styles.ModalCard} ${className}`}>
      <CloseButton onClick={handleClose}/>
      {children}
    </div>
  </>
}