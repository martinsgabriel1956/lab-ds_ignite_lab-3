import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}
export interface TextInputIconProps {
  children: ReactNode;
}