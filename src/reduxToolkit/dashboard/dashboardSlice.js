import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboard } from "./dashboardThunk";

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
