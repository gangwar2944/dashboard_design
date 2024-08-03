import { ThemeProvider } from "@mui/material";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector, type RootState } from "./services/redux/store";
import { RootLayout } from "./shared-ui/Layouts/RootLayout";
import DashboardContainer from "./shared-ui/Layouts/DashboardContainer";
import { routes } from "./services/general/constants";
import { darkTheme, lightTheme } from "./services/redux/Theme/theme";
import { SuspenseLoading } from "./shared-ui/Suspense";

const Home = lazy(() => import("./screens/Home"));
function Router(): JSX.Element {
  const darkMode = useAppSelector(
    (state: RootState) => state.generalReducerRoot.theme.mode
  );
  console.log("darkmode", darkMode);

  const renderRoutes = () => {
    return (
      <RootLayout>
        <DashboardContainer>
          <Routes>
            <Route
              element={
                <SuspenseLoading>
                  <Home />
                </SuspenseLoading>
              }
              path={routes.home}
            />
            <Route element={<Navigate replace to={routes.home} />} path="*" />
          </Routes>
        </DashboardContainer>
      </RootLayout>
    );
  };
  return (
    <ThemeProvider theme={darkMode==='dark' ? darkTheme : lightTheme}>
      {renderRoutes()}
    </ThemeProvider>
  );
}
export default Router;
