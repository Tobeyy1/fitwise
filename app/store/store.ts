import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const DUMMY_DATA = {
  membership: "Once-a-Week Membership",
  workoutDate: "2024-01-22",
  exercises: [
    {
      name: "Squats",
      sets: [
        { setNumber: 1, reps: 12, restTime: 6 },
        { setNumber: 2, reps: 10, restTime: 4 },
        { setNumber: 3, reps: 8, restTime: 6 },
      ],
    },
    {
      name: "Bench Press",
      sets: [
        { setNumber: 1, reps: 12, restTime: 4 },
        { setNumber: 2, reps: 10, restTime: 6 },
        { setNumber: 3, reps: 8, restTime: 4 },
      ],
    },
    {
      name: "Deadlifts",
      sets: [
        { setNumber: 1, reps: 12, restTime: 6 },
        { setNumber: 2, reps: 10, restTime: 4 },
        { setNumber: 3, reps: 8, restTime: 6 },
      ],
    },
  ],
};

interface ThemeState {
  theme: string;
}
interface QRCodeState {
  qrCode: boolean;
}
interface IsLoadingState {
  isLoading: boolean;
}

type ExerciseSet = {
  setNumber: number;
  reps: number;
  restTime: number;
};

type Exercise = {
  name: string;
  sets: ExerciseSet[];
};

type WorkoutData = {
  membership: string;
  workoutDate: string;
  exercises: Exercise[];
};

interface WorkoutDataState {
  workoutData: WorkoutData;
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
const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: {
    isLoading: false,
  } as IsLoadingState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

const workoutDataSlice = createSlice({
  name: "workoutData",
  initialState: {
    workoutData: DUMMY_DATA,
  } as WorkoutDataState,
  reducers: {
    setWorkoutData: (state, action: PayloadAction<WorkoutData>) => {
      state.workoutData = action.payload;
    },
  },
});

const rootReducer = combineReducers({
  //   playersData: playersDataSlice.reducer,
  theme: themeSlice.reducer,
  qrCode: qrCodeSlice.reducer,
  isLoading: isLoadingSlice.reducer,
  workoutData: workoutDataSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const themeActions = themeSlice.actions;
export const qrCodeActions = qrCodeSlice.actions;
export const isLoadingActions = isLoadingSlice.actions;
export const workoutDataActions = workoutDataSlice.actions;
export default store;
