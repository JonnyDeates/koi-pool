import { ButtonHTMLAttributes, ImgHTMLAttributes, HTMLAttributes } from "react"
import styles from "./styles.module.css"
import globalStyles from "../../../styles/styles.module.css"
type TripleIconActionButton = {
    First: ActionButton
    Second: ActionButton
    Third: ActionButton,
}

type ActionButton = {
    buttonProps: ButtonHTMLAttributes<HTMLButtonElement>,
    imgProps: { src: string, alt: string } & Partial<ImgHTMLAttributes<HTMLImageElement>>,
    backgroundProps: HTMLAttributes<HTMLDivElement>,
    isActive: boolean,
}

export function TripleIconActionButton(props: TripleIconActionButton) {

    const buttonVariants = {"First": "accept", "Second": "caution", "Third": "cancel"}
    const buttonVariantKeys = Object.keys(buttonVariants) as (keyof TripleIconActionButton)[];

    return <div className={`${styles.TripleIconActionButtonWrapper}`}>
        <div className={`${styles.TripleIconActionButton}`}>
            {buttonVariantKeys.map((currentButton) => {
                const currentVariant = buttonVariants[currentButton]
                const currentButtonProps = props[currentButton]
                const { className: buttonClassName = '', ...restOfButtonProps } = currentButtonProps.buttonProps
                const { className: backgroundClassName = '', ...restOfBackgroundProps } = currentButtonProps.backgroundProps
                const activeClassName = currentButtonProps.isActive ? "active" : "";

                return <button {...restOfButtonProps} className={`${styles[currentButton]} ${buttonClassName}`}>
                    <div className={`${styles.Content}`}>
                        <img {...currentButtonProps.imgProps} />
                    </div>
                    <div className={`${styles.Background} ${globalStyles[currentVariant]} ${backgroundClassName} ${activeClassName}`} {...restOfBackgroundProps} />
                </button>
            }
            )}
        </div>
    </div>
}