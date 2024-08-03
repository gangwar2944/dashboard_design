import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { GeneralI, SnackBarI, UserData } from "./type";
import { ThemeTypes } from "../../general/constants";

const initialState: GeneralI = {
  userData: {
    tokenType: "",
    expiresIn: 0,
    token: "",
    isAuthenticated: false,
  },
  theme: {
    mode: ThemeTypes.DARK,
  },
  snackBar: {
    severity: "error",
    message: "",
    open: false,
  },
};

export const generalSlice = createSlice({
  name: "GENERAL",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    showSnackBar: (state, action: PayloadAction<SnackBarI>) => {
      state.snackBar = action.payload;
    },
    hideSnackBar: (state) => {
      state.snackBar = initialState.snackBar;
    },
    setTheme: (state,action) => {
      state.theme.mode = action.payload;
    },
  },
});

export const { showSnackBar, hideSnackBar, setUserData, setTheme } =
  generalSlice.actions;

export const equipmentGroupDataState = (state: RootState): GeneralI => {
  return state.generalReducerRoot;
};

export default generalSlice.reducer;
