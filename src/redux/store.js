import { configureStore } from "@reduxjs/toolkit";
import shipmentReducer from "./reducers/shipmentReducer";

const store = configureStore({
  reducer: {
    shipments: shipmentReducer,
  },
});

export default store;

