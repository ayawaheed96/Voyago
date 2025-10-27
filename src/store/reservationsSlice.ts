import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Reservation } from "../types/types";

interface ReservationState {
  items: Reservation[];
  loading: boolean;
  error: string | null;
}

const initialState: ReservationState = {
  items: [],
  loading: false,
  error: null,
};

export const addReservation = createAsyncThunk(
  "reservations/addReservation",
  async (reservation: Reservation, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));

      return reservation;
    } catch (err) {
      console.log(err);
      return rejectWithValue("Failed to book reservation now");
    }
  }
);

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    cancelReservation(state, action: PayloadAction<string>) {
      state.items = state.items.filter((r) => r.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { cancelReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
