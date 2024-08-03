import type { Action, PreloadedStateShapeFromReducersMapObject, ThunkAction} from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generalReducer from "./generalReducer/reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  generalReducerRoot: generalReducer,
});

// Setup store function that can take preloadedState
export const setupStore = (preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// Single store instance without preloadedState
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch as DispatchFunc;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
