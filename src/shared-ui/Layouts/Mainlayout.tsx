import { styled } from "@mui/material/styles";
import * as React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
  open: boolean;
  drawerWidth: number;
}

interface MainProps {
  open: boolean;
  drawerWidth: number;
}
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<MainProps>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  padding: theme.spacing(1.5),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `0`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  }),
}));

function Mainlayout(props: MainLayoutProps): JSX.Element {
  const { children, open, drawerWidth } = props;
  return (
    <Main drawerWidth={drawerWidth} open={open}>
      <DrawerHeader />
      {children}
    </Main>
  );
}
export default Mainlayout;
