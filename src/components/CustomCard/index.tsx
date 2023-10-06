import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Props } from "../../interface";

const CustomCard = (props: Props) => {
  return (
    <>
      <Card elevation={5} sx={props.width}>
        <Box p={5}>{props.children}</Box>
      </Card>
    </>
  );
};

export default CustomCard;
