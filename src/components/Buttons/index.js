import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const GreenButton = styled(Button)({
  background: "ForestGreen",
  border: 0,
  borderRadius: 3,
  color: "white",
  boxShadow: "none",
  "&:hover": {
    background: "SeaGreen",
    boxShadow: "none",
  },
});

export const BlueButton = styled(Button)({
  background: "LightSeaGreen",
  border: 0,
  borderRadius: 3,
  color: "white",
  boxShadow: "none",
  "&:hover": {
    background: "DarkTurquoise",
    boxShadow: "none",
  },
});
