import { createAsyncThunk } from "@reduxjs/toolkit";
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
