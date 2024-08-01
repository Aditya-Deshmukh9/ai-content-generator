import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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
  totalHistorytext: number;
  loading: boolean;
  error: string | null;
}

function calculateTotal(data: HISTORY[]): number {
  return data.reduce((acc, e) => acc + (e.aiResponse?.length || 0), 0);
}

const initialState: DataState = {
  data: [],
  totalHistorytext: 0,
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

const userSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setTotalHistoryText(state, action: PayloadAction<number>) {
      state.totalHistorytext = action.payload;
    },
    calculateTotalHistory(state, action: PayloadAction<HISTORY[]>) {
      state.totalHistorytext = calculateTotal(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(historyData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(historyData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.totalHistorytext = calculateTotal(action.payload);
      })
      .addCase(historyData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTotalHistoryText, calculateTotalHistory } = userSlice.actions;
export default userSlice.reducer;
