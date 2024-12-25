import {HTMLAttributes, ReactNode, useEffect} from "react"
import {createPortal} from "react-dom";
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


    useEffect(() => {
        if (isOpen) {
            document.body.style.maxHeight = '100vh';
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.maxHeight = "unset";
            document.body.style.overflowY = 'unset';
        }
        return () => {
            document.body.style.maxHeight = "unset";
            document.body.style.overflowY = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) {
        return <></>
    }

    const {className = ''} = modalAttributes
    const {className: modalWrapperClassName = ''} = modalWrapperAttributes


    return createPortal(<>
                    <div role='presentation' className={`${styles.ModalWrapper} ${modalWrapperClassName}`} onClick={handleClose}/>
                    <div {...modalAttributes} className={`${styles.ModalCard} ${className}`}>
                        <CloseButton onClick={handleClose}/>
                        {children}
                    </div>
                </> as ReactNode, document.body)

}