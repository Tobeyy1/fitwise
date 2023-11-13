import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}
interface QRCodeState {
  qrCode: boolean;
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
const qrCodeSlice = createSlice({
  name: "qrCode",
  initialState: {
    qrCode: false,
  } as QRCodeState,
  reducers: {
    setQRCode: (state, action: PayloadAction<boolean>) => {
      state.qrCode = action.payload;
    },
  },
});

const rootReducer = combineReducers({
  //   playersData: playersDataSlice.reducer,
  theme: themeSlice.reducer,
  qrCode: qrCodeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const themeActions = themeSlice.actions;
export const qrCodeActions = qrCodeSlice.actions;
export default store;
