import { createAsyncThunk } from "@reduxjs/toolkit";
import adminStaticData from "../../assets/admin";
import teacherStaticData from "../../assets/teacher";
import studentStaticData from "../../assets/student";

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async (role) => {
    const res = new Promise((resolved) => {
      if (role === "student") {
        resolved({ ...studentStaticData });
      } else if (role === "teacher") {
        resolved({ ...teacherStaticData });
      } else if (role === "admin") {
        resolved({ ...adminStaticData });
      }
    });
    return await res;
  }
);
