import { Stack, Typography, styled } from "@mui/material";

export const StyledStack = styled(Stack)(({ theme }) => ({
  display: "inline-block",
  alignItems: "center",
  width: "100%",
  alignSelf: "stretch",
  background: theme.palette.background.paper,
  // border: `1px solid ${theme.palette.grey[100]}`,
  boxShadow: `0px 2rem 3rem ${theme.palette.grey[400]}`,
  borderRadius: 20,
}));

export const Header = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    minHeight: "36px",
  },
  [theme.breakpoints.down("sm")]: {
    minHeight: "36px",
  },
  height: "36px",
  paddingLeft: 15,
  background: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "start",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  borderRadius: "10px 10px 0 0",
}));

export const Label = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textTransform: "none",
  justifyContent: "center",
  background: theme.palette.secondary.main,
  fontWeight: "bold",
  color: theme.palette.text.primary,
}));
