import { ReactNode } from "react";

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode;
  asChild: boolean;
}