import { apiPath, BASE_URL } from "../general/constants";

export const getMockSidebarURL = (): string =>
  `${BASE_URL}${apiPath.getNavigationMenu}`;
export const getFetchSecurityAndRolesURL = (): string =>
  `${BASE_URL}${apiPath.securityAndRoles}`;

export const fetchStudentListUrl =():string=>
  `${BASE_URL}${apiPath.getStudentList}`;
