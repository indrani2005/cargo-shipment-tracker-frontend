import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addShipment } from "../redux/actions/shipmentActions";

const AddShipmentForm = () => {
    const dispatch = useDispatch();
    const [shipmentData, setShipmentData] = useState({
        shipmentID: "",
        containerID: "",
        currentLocation: { city: "", coordinates: { lat: 0, lng: 0 } },
        currentETA: "",
        status: "In Transit"
    });

    const handleChange = (e) => {
        setShipmentData({ ...shipmentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addShipment(shipmentData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="shipmentID" placeholder="Shipment ID" onChange={handleChange} required />
            <input type="text" name="containerID" placeholder="Container ID" onChange={handleChange} required />
            <input type="text" name="currentLocation.city" placeholder="Current Location" onChange={handleChange} required />
            <input type="datetime-local" name="currentETA" onChange={handleChange} required />
            <button type="submit">Add Shipment</button>
        </form>
    );
};

export default AddShipmentForm;

