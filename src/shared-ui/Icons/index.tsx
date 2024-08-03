import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import { Delete, EditNoteOutlined } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const StyledCloseIcon = styled(CloseIcon)(({ theme }) => ({
  verticalAlign: "middle",
  fontSize: "20px",
  cursor: "pointer",
  color: theme.palette.text.primary,
  strokeWidth: 2,
}));

export const StyledEyeIcon = styled(RemoveRedEyeIcon)(({ theme }) => ({
  size: "small",
  color: theme.palette.text.primary,
}));
export const StyledAddIcon = styled(AddIcon)(({ theme }) => ({
  fontSize: "large",
  strokeWidth: 2.5,
  color: theme.palette.text.primary,
}));
export const StyledSaveIcon = styled(SaveIcon)(({ theme }) => ({
  fontSize: "large",
  strokeWidth: 2.5,
  color: theme.palette.text.primary,
}));

export const StyledDelete = styled(Delete)(({ theme }) => ({
  fontSize: "large",
  stroke: theme.palette.error.main,
  strokeWidth: 2.5,
  color: theme.palette.error.main,
}));

export const StyledEditIcon = styled(EditNoteOutlined)(({ theme }) => ({
  fontSize: "1.5rem",
  strokeWidth: 2.5,
  color: theme.palette.text.primary,
}));

export const StyledBellIcon = styled(NotificationsIcon)(({ theme }) => ({
  fontSize: "small",
  stroke: theme.palette.text.primary,
  strokeWidth: 2.5,
}));
