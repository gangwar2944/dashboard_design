export const drawerWidth = 300;

export const enum STATUS {
  LOADING = "loading",
  IDLE = "idle",
  FAILED = "failed",
}

export const BASE_URL = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "http://localhost:3009";

export const routes = {
  home: "/dashboard_design",
};
export const apiPath = {
  getNavigationMenu: "/mocks/main-sidebar.json",
  securityAndRoles: "/mocks/fetch_securityAndRoles.json",
  getStudentList: "/mocks/student_list.json",
};
export const gridSpacing = 1.5;
export const gridSpacingLarge = 3;
export const colSpacing = 2;
export const rowSpacing = 3;

export const API_BASE_URL: string = process.env.API_URL
  ? process.env.API_URL
  : "http://localhost:3009";

export enum ThemeTypes {
  LIGHT = "light",
  DARK = "dark",
}
