import {Button} from "../../Buttons/Button"
import {GenericModal, GenericModalProps} from "../GenericModal"

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
                                         cardAttributes,
                                         modalWrapperAttributes
                                       }: GenericAcceptanceModalProps) {
  return <GenericModal
    handleClose={handleClose}
    isOpen={isOpen}
    title={title}
    actionGroupAttributes={actionGroupAttributes}
    bodyAttributes={bodyAttributes}
    modalAttributes={modalAttributes}
    modalWrapperAttributes={modalWrapperAttributes}
    cardAttributes={cardAttributes}
    actionButtons={
      [
        <Button variant="cancel" onClick={handleClose}>Cancel</Button>,
        <Button variant='accept' type='submit' onClick={handleSubmit}>Submit</Button>
      ]
    }>
    {children}
  </GenericModal>
}