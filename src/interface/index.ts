import { ReactNode } from "react";

export interface Props {
  children?: ReactNode;
  width?: object;
  onClose?: () => void;
  isOpen?: boolean;
  open?: any;
}

export interface ButtonProps {
  type: "button" | "reset" | "submit";
  variant: "outlined" | "contained";
  onClick?: () => void;
  color?: "success" | "error" | "secondary" | "primary";
  icon?: ReactNode;
  disabled?: boolean;
  style?: object;
  fullWidth?: boolean;
  children?: ReactNode;
}

export interface TransactionProps {
  id: number;
  type: string;
  category: string;
  description: string;
  amount: number;
}
