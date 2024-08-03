import * as React from "react";
import { Paper, styled } from "@mui/material";
import { Panel } from "../Panel";
import { PanelHeading } from "../PanelHeading";

interface PanelContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  headingRightElement?: React.ReactNode;
  headingLeftElement?: React.ReactNode;
  isPadding?: boolean;
  children: React.ReactNode;
}
const PanelContainerStyle = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[100]}`,
  boxShadow:
    theme.palette.mode === "dark"
      ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
  borderRadius: "10px",
  background: theme.palette.background.paper,
}));
export function PanelContainer(props: PanelContainerProps): JSX.Element {
  const {
    children,
    title,
    headingRightElement: headingRight,
    headingLeftElement: headingLeft,
    isPadding,
    ...rest
  } = props;

  return (
    <PanelContainerStyle {...rest}>
      <PanelHeading leftIcon={headingLeft} title={title}>
        {headingRight}
      </PanelHeading>
      <Panel isPadding={isPadding} panelTopFlat>
        {children}
      </Panel>
    </PanelContainerStyle>
  );
}
