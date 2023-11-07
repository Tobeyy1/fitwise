import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "dark",
  } as ThemeState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

const rootReducer = combineReducers({
  //   playersData: playersDataSlice.reducer,
  theme: themeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const themeActions = themeSlice.actions;
export default store;
