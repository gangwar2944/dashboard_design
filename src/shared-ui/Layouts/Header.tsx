import { Badge, Box, styled, useTheme } from "@mui/material";
import type { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ProfileSection from "./ProfileSection";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContrastOutlinedIcon from "@mui/icons-material/ContrastOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useAppDispatch, useAppSelector } from "../../services/redux/store";
import { setTheme } from "../../services/redux/generalReducer/reducer";
import { ThemeTypes } from "../../services/general/constants";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const IconContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

interface HeaderProps {
  open: boolean;
  drawerWidth: number;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: "rgb(0, 0, 0) 0px 0px 3px;",
  // zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header(props: HeaderProps): JSX.Element {
  const { open, drawerWidth } = props;
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(
    (state) => state.generalReducerRoot.theme.mode
  );
  const handleThemeChange = () => {
    dispatch(
      setTheme(
        currentTheme === ThemeTypes.DARK ? ThemeTypes.LIGHT : ThemeTypes.DARK
      )
    );
  };
  return (
    <AppBar
      color="transparent"
      drawerWidth={drawerWidth}
      open={open}
      position="fixed"
    >
      <Toolbar sx={{ paddingRight: "5px !important" }}>
        <Box sx={{ flexGrow: 1 }} />
        <IconContainer>
          <ContrastOutlinedIcon
            style={{
              fontSize: "1.8rem",
              cursor: "pointer",
              color: theme.palette.text.primary,
            }}
            onClick={handleThemeChange}
          />
          <EmailOutlinedIcon
            style={{
              fontSize: "1.8rem",
              cursor: "pointer",
              color: theme.palette.text.primary,
            }}
          />
          <SettingsOutlinedIcon
            style={{
              fontSize: "1.8rem",
              cursor: "pointer",
              color: theme.palette.text.primary,
            }}
          />
          <Badge color="primary" variant="dot">
            <NotificationsNoneOutlinedIcon
              style={{
                fontSize: "1.8rem",
                cursor: "pointer",
                color: theme.palette.text.primary,
              }}
            />
          </Badge>

          <ProfileSection />
        </IconContainer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
