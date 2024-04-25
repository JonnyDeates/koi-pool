import {ReactNode, useState } from "react"
import { GenericModal, GenericModalProps } from "../GenericModal"

import styles from './styles.module.css'

export type GenericModalTabsProps = { title: string, body: ReactNode, actionButtons?: ReactNode[] }

type GenericModalWithTabsProps = {
  tabs: GenericModalTabsProps[]
} & Omit<GenericModalProps, 'children' | 'title' | 'actionButtons'>

export function GenericModalWithTabs({ handleClose, isOpen, tabs = [], modalAttributes, cardAttributes, bodyAttributes, actionGroupAttributes, modalWrapperAttributes }: GenericModalWithTabsProps) {
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
    modalWrapperAttributes={modalWrapperAttributes}
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