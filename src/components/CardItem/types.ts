import { IconButtonProps } from "@mui/material/IconButton";

export interface CardProps {
  title: string;
  price: string;
  height?: string;
  weight?: string;
  technique?: string;
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
