import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";

interface PanelProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  isPadding?: boolean;
  panelTopFlat?: boolean;
}
interface StyledItemProps {
  panelTopFlat?: boolean;
}
export function Panel({
  children,
  isPadding = false,
  panelTopFlat = false,
}: PanelProps): JSX.Element {

  const StyledItem = styled(Paper)<StyledItemProps>(
    ({ theme}) => ({
      ...theme.typography.body2,
      background: theme.palette.background.paper,
      padding: isPadding ? "15px" : "0px",
      height: "auto",
      lineHeight: "auto",
      width: "100%",
      borderRadius: panelTopFlat ? "0px 0px 10px 10px" : "10px",
      border: `1px solid ${theme.palette.grey[100]}`,
      boxShadow: "none",
    })
  );

  return (
    <StyledItem>
      <Box>{children}</Box>
    </StyledItem>
  );
}
