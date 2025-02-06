import { createSlice } from "@reduxjs/toolkit";
import { fetchShipments, addShipment } from "../actions/shipmentActions";

const shipmentSlice = createSlice({
  name: "shipments",
  initialState: {
    shipments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShipments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShipments.fulfilled, (state, action) => {
        state.loading = false;
        state.shipments = action.payload;
      })
      .addCase(fetchShipments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addShipment.fulfilled, (state, action) => {
        state.shipments.push(action.payload);
      });
  },
});

export default shipmentSlice.reducer;

