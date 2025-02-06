import axios from "axios";

// Action Types
export const FETCH_SHIPMENTS_SUCCESS = "FETCH_SHIPMENTS_SUCCESS";
export const ADD_SHIPMENT = "ADD_SHIPMENT";

// Action Creators
export const fetchShipments = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:5000/api/shipments"); // Adjust URL as needed
        dispatch({ type: FETCH_SHIPMENTS_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("Error fetching shipments:", error);
    }
};

export const addShipment = (shipment) => (dispatch) => {
    try {
        dispatch({ type: ADD_SHIPMENT, payload: shipment });
    } catch (error) {
        console.error("Error adding shipment:", error);
    }
};
