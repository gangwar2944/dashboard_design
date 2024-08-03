import { Box, Typography, useTheme } from "@mui/material";
import { SideBarData, sideBarData } from "../../mocks/sideBarJson";
import { useLocation, useNavigate } from "react-router-dom";

interface SideBarProps {
  remainingDrawerWidth: number;
}

const SideBar = ({ remainingDrawerWidth }: SideBarProps) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const theme = useTheme();

  const handleNavigate = (item: SideBarData) => {
    navigate(item.path);
  };

  // Separate the "Logout" item from the rest of the items
  const nonLogoutItems = sideBarData.filter(item => item.name !== "Logout");
  const logoutItem = sideBarData.find(item => item.name === "Logout");

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Box>
        {nonLogoutItems.map((item) => {
          const isSelected = location === item.path;

          return (
            <Box
              key={item.id}
              onClick={() => handleNavigate(item)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                cursor: "pointer",
                marginTop: "2px",
                fontSize: "1.2rem",
                transition: "all 300ms ease",
                backgroundColor: isSelected
                  ? "rgba(132,139,200,.18)"
                  : "transparent",
                color: isSelected
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
                ...(isSelected
                  ? {
                      "&::before": {
                        content: '""',
                        width: "6px",
                        height: "45px",
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }
                  : {
                      "&:hover": {
                        color: theme.palette.primary.main,
                        marginLeft: "8px",
                      },
                    }),
              }}
            >
              <Box display={"flex"} padding={"12px"} marginLeft={"10px"}>
                {item.getIcon()}
                <Typography
                  variant="body1"
                  sx={{
                    marginLeft: "10px",
                    fontSize: "15px",
                    display: remainingDrawerWidth === 70 ? "none" : "block",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      {logoutItem && (
        <Box
          key={logoutItem.id}
          onClick={() => handleNavigate(logoutItem)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer",
            marginTop: "2px",
            fontSize: "1.2rem",
            transition: "all 300ms ease",
            backgroundColor: location === logoutItem.path
              ? "rgba(132,139,200,.18)"
              : "transparent",
            color: location === logoutItem.path
              ? theme.palette.primary.main
              : theme.palette.text.secondary,
            ...(location === logoutItem.path
              ? {
                  "&::before": {
                    content: '""',
                    width: "6px",
                    height: "45px",
                    backgroundColor: theme.palette.primary.dark,
                  },
                }
              : {
                  "&:hover": {
                    color: theme.palette.primary.main,
                    marginLeft: "8px",
                  },
                }),
          }}
        >
          <Box display={"flex"} padding={"12px"} marginLeft={"10px"}>
            {logoutItem.getIcon()}
            <Typography
              variant="body1"
              sx={{
                marginLeft: "10px",
                fontSize: "15px",
                display: remainingDrawerWidth === 70 ? "none" : "block",
              }}
            >
              {logoutItem.name}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SideBar;
