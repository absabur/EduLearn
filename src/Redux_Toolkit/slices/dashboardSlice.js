import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studentData from "../../assets/studentData";
import teacherData from "../../assets/teacherData";
import adminData from "../../assets/adminData";

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async (role) => {
    const res = new Promise((resolved) => {
      if (role === "student") {
        resolved({ ...studentData });
      } else if (role === "teacher") {
        resolved({ ...teacherData });
      } else if (role === "admin") {
        resolved({ ...adminData });
      }
    });
    return await res;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { items: {}, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchDashboard.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default dashboardSlice.reducer;
