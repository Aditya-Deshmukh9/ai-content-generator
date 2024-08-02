import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { eq } from "drizzle-orm";
import { db } from "@/utils/db";
import { AIResponse, UserSubscription } from "@/utils/schema";

interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  tamplateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

interface USER_SUBSCRIPTION {
  id: number;
  email: string;
  username: string | null;
  active: boolean;
  paymentId: string | null;
  joinDate: string | null;
}

interface DataState {
  data: HISTORY[];
  totalHistoryText: number;
  userSubscriptionDetails: USER_SUBSCRIPTION[] | null;
  loading: boolean;
  error: string | null;
}

function calculateTotal(data: HISTORY[]): number {
  return data.reduce((acc, e) => acc + (e.aiResponse?.length || 0), 0);
}

const initialState: DataState = {
  data: [],
  totalHistoryText: 0,
  loading: false,
  error: null,
  userSubscriptionDetails: null,
};

export const fetchHistoryData = createAsyncThunk(
  "data/fetchHistoryData",
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

export const fetchUserSubscriptionData = createAsyncThunk(
  "data/fetchUserSubscriptionData",
  async (userEmail: string, { rejectWithValue }) => {
    try {
      // @ts-ignore
      const results: USER_SUBSCRIPTION[] = await db
        .select()
        .from(UserSubscription)
        .where(eq(UserSubscription?.email, userEmail));

      console.log(results);
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
      state.totalHistoryText = action.payload;
    },
    calculateTotalHistory(state, action: PayloadAction<HISTORY[]>) {
      state.totalHistoryText = calculateTotal(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoryData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistoryData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.totalHistoryText = calculateTotal(action.payload);
      })
      .addCase(fetchHistoryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchUserSubscriptionData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserSubscriptionData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.userSubscriptionDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserSubscriptionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTotalHistoryText, calculateTotalHistory } = userSlice.actions;
export default userSlice.reducer;
