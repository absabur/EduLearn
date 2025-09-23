import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    error: null,
  },
  reducers: {
    login: (state, action) => {
      const { role, password } = action.payload;

      if (
        ["student", "teacher", "admin"].includes(role) &&
        password === "1234"
      ) {
        state.user = { role };
        state.isLoggedIn = true;
        state.error = null;

        localStorage.setItem("user", JSON.stringify({ role }));
        localStorage.setItem("isLoggedIn", "true");
      } else {
        state.error = "Invalid credentials!";
      }
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;

      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
