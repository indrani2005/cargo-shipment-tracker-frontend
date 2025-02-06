"use client";

import { useDispatch, useSelector } from "react-redux";


import React, { useEffect } from "react";
import store from "@/redux/store";  // Absolute import
import ShipmentTable from "../../components/ShipmentTable";  
import { RootState } from "../redux/store";  
import { fetchShipments, addShipment } from "../redux/actions/shipmentActions";

const ShipmentTable = () => {
  const dispatch = useDispatch();
  const shipments = useSelector((state: RootState) => state.shipments);

  useEffect(() => {
    dispatch(fetchShipments());
  }, [dispatch]);

  const handleAddShipment = () => {
    const newShipment = {
      id: shipments.length + 1,
      name: `Shipment ${shipments.length + 1}`,
      status: "Pending",
    };
    dispatch(addShipment(newShipment));
  };

  return (
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
  );
};

const Page = () => {
  return (
    <div className="container mx-auto">
      <ShipmentTable />
    </div>
  );
};

export default Page;
