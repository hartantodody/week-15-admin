import Typography from "@mui/material/Typography";

interface HeaderProps {
  text: string;
  variant: "h1" | "h2" | "h3" | "body1" | "body2" | "subtitle1" | "subtitle2";
}

const Text = (props: HeaderProps) => {
  return (
    <Typography variant={props.variant} gutterBottom>
      {props.text}
    </Typography>
  );
};

export default Text;
