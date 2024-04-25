import {DetailedHTMLProps, HTMLAttributes, LabelHTMLAttributes} from "react";
import {Input, InputProps} from "../Input";
import { SpacedLabel } from "../SpacedLabel";
type SpacedLabeledInputProps = {
  label: string,
  labelProps?: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
  divProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
} & InputProps

export function SpacedLabelInput({label, labelProps = {}, divProps = {}, ...inputProps}: SpacedLabeledInputProps) {
  return <SpacedLabel label={label} labelProps={labelProps} {...divProps}>
    <Input width={"150px"}  {...inputProps}/>
  </SpacedLabel>
}