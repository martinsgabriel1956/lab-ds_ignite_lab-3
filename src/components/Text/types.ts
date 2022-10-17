import { ReactNode } from "react";

export interface TextProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}