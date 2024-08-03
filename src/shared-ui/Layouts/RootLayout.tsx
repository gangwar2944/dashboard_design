import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout(props: RootLayoutProps): JSX.Element {
  const { children } = props;
  return (
    <Box data-testid="root-layout" sx={{ display: "flex" }}>
      <CssBaseline />
      {children}
    </Box>
  );
}
