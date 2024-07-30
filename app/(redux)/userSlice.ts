import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { eq } from "drizzle-orm";
import { db } from "@/utils/db";
import { AIResponse } from "@/utils/schema";

interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  tamplateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

interface DataState {
  data: HISTORY[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: false,
  error: null,
};

export const historyData = createAsyncThunk(
  "data/historyData",
  async (userEmail: string, { rejectWithValue }) => {
    try {
      const results: HISTORY[] = await db
        .select()
        .from(AIResponse)
        .where(eq(AIResponse.createdBy, userEmail));

      return results;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error);
    }
  },
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(historyData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(historyData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(historyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dataSlice.reducer;
