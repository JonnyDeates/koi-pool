import React, {HTMLAttributes, ReactNode} from "react";
import styles from './styles.module.css'
import {GenericModalBase, GenericModalBaseProps} from "../GenericModalBase";


export type GenericModalProps = GenericModalBaseProps & {
  title?: ReactNode,
  actionButtons?: ReactNode[],
  actionGroupAttributes?: HTMLAttributes<HTMLDivElement>
  bodyAttributes?: HTMLAttributes<HTMLDivElement>
  cardAttributes?: HTMLAttributes<HTMLDivElement>
}

export function GenericModal({
                               handleClose,
                               isOpen,
                               title,
                               children,
                               actionButtons = [],
                               actionGroupAttributes = {},
                               cardAttributes = {},
                               bodyAttributes = {},
                               modalAttributes,
                               modalWrapperAttributes
                             }: GenericModalProps) {
  let titleNode = title;
  if (typeof title === 'string' || typeof title === 'number') {
    titleNode = <h1>{title}</h1>
  }
  const {className: cardClassName = ''} = cardAttributes
  const {className: bodyClassName = ''} = bodyAttributes
  const {className: actionGroupClassName = ''} = actionGroupAttributes

  return <GenericModalBase modalWrapperAttributes={modalWrapperAttributes} modalAttributes={modalAttributes}
                           handleClose={handleClose} isOpen={isOpen}>
    <div {...cardAttributes} className={`${styles.ModalContent} ${cardClassName}`}>
      {titleNode}
      <div {...bodyAttributes} className={`${styles.ModalBody} ${bodyClassName}`}>
        {children}
      </div>
      {actionButtons.length > 0
        ?
        <div {...actionGroupAttributes} className={`${styles.ModalActionGroup} ${actionGroupClassName}`}>
          {actionButtons.map((actionButton, i) => <React.Fragment key={"actionButton key " + i}>
              {actionButton}
            </React.Fragment>
          )}

        </div>
        : <></>
      }
    </div>
  </GenericModalBase>
}



