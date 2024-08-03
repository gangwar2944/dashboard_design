import React from "react";
import { useState, useMemo, useRef, useEffect } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
  ClickAwayListener,
  styled,
  Avatar,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const CustonPaper = styled(Paper)`
  position: fixed;
  top: 65px;
  right: 10px !important;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12) !important;
`;
export const ProfileContainer = styled("div")(({ theme }) => ({
  ".MuiPaper-root": {
    background: theme.palette.background.paper,
    borderRadius: "0px",
    border: `1px solid ${theme.palette.grey[100]}`,

    ".scrollbar-container, .MuiList-root, .MuiBox-root": {
      background: theme.palette.background.paper,

      ".MuiTypography-root": {
        color: theme.palette.text.primary,
      },

      ".MuiButtonBase-root": {
        borderRadius: "0px",

        "&:hover": {
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },

        svg: {
          color: theme.palette.text.primary,
        },
      },
    },
  },
}));

const CustomisedH4 = styled(Typography)`
  margin: 0 !important;
  font-size: 1rem !important;
  font-weight: 600 !important;
  font-family: "Roboto", sans-serif !important;
  line-height: 1.235 !important;
`;

function ProfileSection(): JSX.Element {
  const selectedIndex = useMemo(() => -1, []);
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleLogout = (): void => {
    alert("user logout");
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef<boolean>(open);
  useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Avatar
        src="https://media.istockphoto.com/id/1708046305/photo/business-man-mature-and-portrait-outdoor-with-arms-crossed-for-professional-career-and.jpg?s=1024x1024&w=is&k=20&c=KP6LSxZHxclT7byR5X2ZEX9V19daOqFbQsigQTrmcco="
        onClick={handleToggle}
        sx={{ width: "35px", height: "35px", borderRadius: "50%" }}
      />
      <Popper
        anchorEl={anchorRef.current}
        disablePortal
        open={open}
        placement="bottom-end"
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
        role={undefined}
        transition
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <ProfileContainer>
              <CustonPaper {...TransitionProps}>
                <Box sx={{ pl: 2, pt: 2 }}>
                  <CustomisedH4 variant="h4">Welcome,</CustomisedH4>
                  <br />
                  <Stack>
                    <Stack alignItems="center" direction="row" spacing={0.1}>
                      <CustomisedH4 sx={{ fontWeight: 400 }} variant="h4">
                        vishal gangwar
                      </CustomisedH4>
                    </Stack>
                    <Typography variant="subtitle2">Administrator</Typography>
                  </Stack>
                </Box>
                <Box>
                  <List
                    component="nav"
                    sx={{
                      width: "100%",
                      maxWidth: 250,
                      minWidth: 300,
                      backgroundColor: (theme) =>
                        theme.palette.background.paper,
                      borderRadius: "10px",
                    }}
                  >
                    <ListItemButton
                      onClick={() => handleLogout()}
                      selected={selectedIndex === 4}
                      sx={{ borderRadius: `8px` }}
                    >
                      <ListItemIcon style={{ minWidth: "30px" }}>
                        <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2">Logout</Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                </Box>
              </CustonPaper>
            </ProfileContainer>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
}

export default ProfileSection;
