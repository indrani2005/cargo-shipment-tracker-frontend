import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ShipmentTable from "./components/ShipmentTable";
import AddShipmentForm from "./components/AddShipmentForm";
import Map from "./components/Map";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Cargo Shipment Tracker</h1>
                <AddShipmentForm />
                <ShipmentTable />
                <Map />
            </div>
        </Provider>
    );
};

export default App;

