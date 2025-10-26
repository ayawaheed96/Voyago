import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import roomsReducer from "./roomsSlice";
import reservationsReducer from "./reservationsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    rooms: roomsReducer,
    reservations: reservationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
