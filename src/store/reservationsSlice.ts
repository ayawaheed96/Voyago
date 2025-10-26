import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Reservation {
  id: string;
  name: string;
  date: { checkIn: string; checkOut: string };
  price: number;
  image: string;
}

interface ReservationState {
  items: Reservation[];
}

const initialState: ReservationState = {
  items: [],
};

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation(state, action: PayloadAction<Reservation>) {
      console.log("Adding reservation:", action.payload);
      state.items.push(action.payload);
      console.log("Current reservations:", state.items);
    },
    cancelReservation(state, action: PayloadAction<string>) {
      state.items = state.items.filter((r) => r.id !== action.payload);
    },
  },
});

export const { addReservation, cancelReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
