import { Suspense } from "react";
import { styled } from "@mui/material";
import { RootLayout } from "../Layouts/RootLayout";
import { Loader } from "../Loader";

interface SuspenseLoadingProps {
  includeRootLayout?: boolean;
  children: JSX.Element;
}

const StyledLoaderBackground = styled("div")(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  height: "100%",
  position: "fixed",
  top: "50%",
  left: "50%",
}));

const StyledLoaderBackgroundForMicrofrontend = styled("div")(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  height: "100%",
  position: "fixed",
  top: "50%",
  left: "58%",
}));

export function SuspenseLoading({
  children,
  includeRootLayout,
}: SuspenseLoadingProps): JSX.Element {
  const addRootLayout = (): JSX.Element => {
    if (includeRootLayout) {
      return (
        <RootLayout>
          <StyledLoaderBackground>
            <Loader />
          </StyledLoaderBackground>
        </RootLayout>
      );
    }
    return (
      <StyledLoaderBackgroundForMicrofrontend data-testid="suspenseForMicrofrontend">
        <Loader />
      </StyledLoaderBackgroundForMicrofrontend>
    );
  };
  return <Suspense fallback={addRootLayout()}>{children}</Suspense>;
}
