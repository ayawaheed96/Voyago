import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockUsers } from "../assets/assets";

interface User {
  name: string;
  username: string;
  password: string;
}

interface AuthState {
  user: User | null;
}

const storedUser = localStorage.getItem("user");

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    const found = mockUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (!found) return rejectWithValue("Invalid username or password");
    return found;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
