import Button from "@mui/material/Button";
import { ButtonProps } from "../../interface";

const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      type={props.type}
      variant={props.variant}
      onClick={props.onClick}
      color={props.color}
      startIcon={props.icon}
      endIcon={props.icon}
      style={props.style}
      fullWidth={props.fullWidth}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
