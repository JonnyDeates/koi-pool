
import { HTMLAttributes, ReactNode, useState } from "react";
import styles from './styles.module.css'
import { CloseButton } from "../CloseButton";
import React from "react";
import { Button } from "../Button";



export type GenericModalBaseProps = {
    handleClose: () => void, isOpen: boolean, children: ReactNode,
    modalAttributes?: HTMLAttributes<HTMLDivElement>,
}
export type LimitedModalProps = Omit<GenericModalProps, "title" | "children">

export function GenericModalBase({ handleClose, isOpen, children, modalAttributes = {} }: GenericModalBaseProps) {

    if (!isOpen) {
        return <></>
    }

    return <>
        <div role='presentation' className={styles.ModalWrapper} onClick={handleClose} />
        <div {...modalAttributes} className={styles.ModalCard}>
            <CloseButton onClick={handleClose} />
            {children}
        </div>
    </>
}

export type GenericModalProps = GenericModalBaseProps & {
    title: ReactNode,
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
    modalAttributes = {}
}: GenericModalProps) {
    let titleNode = title;
    if (typeof title === 'string' || typeof title === 'number') {
        titleNode = <h1>{title}</h1>
    }


    return <GenericModalBase {...modalAttributes} handleClose={handleClose} isOpen={isOpen}>
        <div {...cardAttributes} className={styles.ModalContent}>
            {titleNode}
            <div {...bodyAttributes} className={styles.ModalBody}>
                {children}
            </div>
            {actionButtons.length > 0
                ?
                <div {...actionGroupAttributes} className={styles.ModalActionGroup}>
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

export type GenericAcceptanceModalProps = Omit<GenericModalProps, 'actionButtons'> & { handleSubmit: () => void }

export function GenericAcceptanceModal({
    handleClose,
    handleSubmit,
    isOpen,
    title,
    children,
    actionGroupAttributes,
    bodyAttributes,
    modalAttributes,
    cardAttributes
}: GenericAcceptanceModalProps) {
    return <GenericModal
        handleClose={handleClose}
        isOpen={isOpen}
        title={title}
        actionGroupAttributes={actionGroupAttributes}
        bodyAttributes={bodyAttributes}
        modalAttributes={modalAttributes}
        cardAttributes={cardAttributes}
        actionButtons={
            [
                <Button variant="cancel" onClick={handleClose}>Cancel</Button>,
                <Button onClick={handleSubmit}>Submit</Button>
            ]
        }>
        {children}
    </GenericModal >
}

export type GenericModalTabsProps = { title: string, body: ReactNode, actionButtons?: ReactNode[] }

type GenericModalWithTabsProps = {
    tabs: GenericModalTabsProps[]
} & Omit<GenericModalProps, 'children' | 'title'>

export function GenericModalWithTabs({ handleClose, isOpen, tabs = [], modalAttributes, cardAttributes, bodyAttributes, actionGroupAttributes }: GenericModalWithTabsProps) {
    const [currentTabIndex, setCurrentTabIndex] = useState<number>(0)
    if (tabs.length < 1) {
        throw new Error("Not enough tabs specified for GenericModalWithTabs Function Component.")
    }
    const { body, actionButtons = [] } = tabs[currentTabIndex];

    return <GenericModal
        handleClose={handleClose}
        isOpen={isOpen}
        actionButtons={actionButtons}
        actionGroupAttributes={actionGroupAttributes}
        bodyAttributes={bodyAttributes}
        cardAttributes={cardAttributes}
        modalAttributes={modalAttributes}
        title={
            <div className={styles.ModalTabs}>
                {tabs.map((tab, index) =>
                    <h1 key={tab.title + index} className={index === currentTabIndex ? styles.TabActive : ''}
                        onClick={() => setCurrentTabIndex(index)} style={{ width: `${100 / tabs.length}%` }}>
                        {tab.title}
                    </h1>)
                }
            </div>
        }>
        {body}
    </GenericModal >
}
