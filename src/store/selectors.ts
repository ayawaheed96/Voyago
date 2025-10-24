import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const selectFilteredRooms = createSelector(
  (state: RootState) => state.rooms.allRooms,
  (state: RootState) => state.rooms.filters,
  (rooms, filters) => {
    const { type, priceRange, status } = filters;

    return rooms.filter((room) => {
      const matchesType = type ? room.type.toLowerCase() === type : true;
      const matchesStatus = status
        ? room.available === (status === "available")
        : true;
      const matchesPrice =
        room.price >= priceRange[0] && room.price <= priceRange[1];

      return matchesType && matchesStatus && matchesPrice;
    });
  }
);
