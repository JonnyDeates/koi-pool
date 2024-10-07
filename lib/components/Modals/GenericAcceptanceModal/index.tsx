import {Button} from "../../Buttons/Button"
import {GenericModal, GenericModalProps} from "../GenericModal"

export type GenericAcceptanceModalProps = Omit<GenericModalProps, 'actionButtons'> & {
    handleSubmit: () => void,
    isNegative?: boolean
    submitButtonText?: string,
    cancelButtonText?: string
}

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
                                           modalWrapperAttributes,
                                           isNegative = false,
                                           submitButtonText = 'Submit',
                                           cancelButtonText = 'Cancel'

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
            isNegative
                ? [
                    <Button variant="accept" type='submit' onClick={handleSubmit}>{submitButtonText}</Button>,
                    <Button variant='cancel' onClick={handleClose}>{cancelButtonText}</Button>
                ]
                : [
                    <Button variant="cancel" onClick={handleClose}>{cancelButtonText}</Button>,
                    <Button variant='accept' type='submit' onClick={handleSubmit}>{submitButtonText}</Button>
                ]
        }>
        {children}
    </GenericModal>
}