import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Room } from "../types/types";

interface RoomsState {
  allRooms: Room[];
  filteredRooms: Room[];
  filters: {
    type: string;
    status: string;
    priceRange: number[];
  };
}

const initialState: RoomsState = {
  allRooms: [],
  filteredRooms: [],
  filters: {
    type: "",
    status: "",
    priceRange: [0, 500],
  },
};

const applyFilters = (state: RoomsState) => {
  state.filteredRooms = state.allRooms.filter((room) => {
    const matchesType = state.filters.type
      ? room.type.toLowerCase() === state.filters.type
      : true;

    const matchesStatus = state.filters.status
      ? room.available === (state.filters.status === "available")
      : true;

    const matchesPrice =
      room.price >= state.filters.priceRange[0] &&
      room.price <= state.filters.priceRange[1];

    return matchesType && matchesStatus && matchesPrice;
  });
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setRooms(state, action: PayloadAction<Room[]>) {
      state.allRooms = action.payload;
      state.filteredRooms = action.payload;
    },

    setType(state, action: PayloadAction<string>) {
      state.filters.type = action.payload;
      applyFilters(state);
    },

    setStatus(state, action: PayloadAction<string>) {
      state.filters.status = action.payload;
      applyFilters(state);
    },

    setPriceRange(state, action: PayloadAction<number[]>) {
      state.filters.priceRange = action.payload;
      applyFilters(state);
    },

    resetFilters(state) {
      state.filters = {
        type: "",
        status: "",
        priceRange: [0, 500],
      };
      state.filteredRooms = state.allRooms;
    },
  },
});

export const { setRooms, setType, setStatus, setPriceRange, resetFilters } =
  roomsSlice.actions;
export default roomsSlice.reducer;

// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import type { Room } from "../types/types";

// interface FiltersState {
//   type: string;
//   priceRange: number[];
//   status: string;
// }

// interface RoomsState {
//   rooms: Room[];
//   filters: FiltersState;
// }

// const initialState: RoomsState = {
//   rooms: [],
//   filters: {
//     type: "",
//     priceRange: [0, 500],
//     status: "",
//   },
// };

// const roomsSlice = createSlice({
//   name: "rooms",
//   initialState,
//   reducers: {
//     setRooms(state, action: PayloadAction<Room[]>) {
//       state.rooms = action.payload;
//     },
//     setType(state, action: PayloadAction<string>) {
//       state.filters.type = action.payload;
//     },
//     setPriceRange(state, action: PayloadAction<number[]>) {
//       state.filters.priceRange = action.payload;
//     },
//     setStatus(state, action: PayloadAction<string>) {
//       state.filters.status = action.payload;
//     },
//     resetFilters(state) {
//       state.filters = { type: "", priceRange: [0, 500], status: "" };
//     },
//   },
// });

// export const { setRooms, setType, setPriceRange, setStatus, resetFilters } =
//   roomsSlice.actions;

// export default roomsSlice.reducer;
