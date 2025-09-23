import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async ({ role, password }, { rejectWithValue }) => {
    return new Promise((resolve, reject) => {
      if (
        ["student", "teacher", "admin"].includes(role) &&
        password === "1234"
      ) {
        const user = { role };
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");
        resolve(user);
      } else {
        reject("Invalid credentials!");
      }
    }).catch((err) => rejectWithValue(err));
  }
);
