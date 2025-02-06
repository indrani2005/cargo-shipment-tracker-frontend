"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments, addShipment } from "@redux/actions/shipmentActions";
import { RootState } from "@redux/store";
import { Provider } from "react-redux";
import store from "@redux/store"; // Make sure this path is correct and aligns with your file structure

const ShipmentTable: React.FC = () => {
  const dispatch = useDispatch();
  const shipments = useSelector((state: RootState) => state.shipments.shipments); // Access shipments correctly

  useEffect(() => {
    dispatch(fetchShipments() as any); // Explicitly cast if using TypeScript and `fetchShipments` is async
  }, [dispatch]);

  const handleAddShipment = () => {
    const newShipment = {
      id: shipments.length + 1,
      name: `Shipment ${shipments.length + 1}`,
      status: "Pending",
    };
    dispatch(addShipment(newShipment) as any); // Explicitly cast if using TypeScript and `addShipment` is async
  };

  return (
    <Provider store={store}>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Shipment Management</h1>
        <button
          onClick={handleAddShipment}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Shipment
        </button>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment: any) => (
              <tr key={shipment.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{shipment.id}</td>
                <td className="border border-gray-300 px-4 py-2">{shipment.name}</td>
                <td className="border border-gray-300 px-4 py-2">{shipment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Provider>
  );
};

export default ShipmentTable;
