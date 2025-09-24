import { createAsyncThunk } from "@reduxjs/toolkit";
import accounts from "../../assets/demoAccount";

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async ({ email, password, role }, { rejectWithValue }) => {
    return new Promise((resolve, reject) => {
      if (!role) {
        Object.keys(accounts).forEach((item) => {
          if (accounts[item].email == email) {
            role = item;
          }
        });
      }
      if (
        accounts[role].email == email &&
        accounts[role].password == password
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
