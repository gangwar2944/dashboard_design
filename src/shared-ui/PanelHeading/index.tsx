import { Box, Typography, styled } from "@mui/material";
import type { ReactNode } from "react";

export const StyledPanelHeading = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  borderBottom: theme.palette.secondary.dark,
  color: theme.palette.text.primary,
  fontSize: "16px",
  padding: "8px 10px",
  display: "flex",
  justifyContent: "space-between",
  height: "35px",
  alignItems: "center",
  borderRadius: "10px 10px 0 0",
}));
const HeadingLeftElement = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
}));
interface PanelProps {
  children?: ReactNode;
  title: string;
  leftIcon?: ReactNode;
}

export function PanelHeading({
  children,
  title,
  leftIcon,
}: PanelProps): JSX.Element {
  return (
    <StyledPanelHeading>
      <HeadingLeftElement>
        <Typography
          sx={{ display: leftIcon === undefined ? "none" : "block" }}
          variant="body2"
        >
          {leftIcon}
        </Typography>
        <Typography>{title}</Typography>
      </HeadingLeftElement>
      {children}
    </StyledPanelHeading>
  );
}
