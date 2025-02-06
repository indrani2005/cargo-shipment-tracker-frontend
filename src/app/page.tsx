"use client";

import ShipmentTable from "../components/ShipmentTable";
import MapComponent from "../components/MapComponent";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Page = () => {
  const shipments = useSelector((state: RootState) => state.shipments.shipments);

  return (
    <div className="p-4">
      <ShipmentTable />
      <MapComponent shipments={shipments} />
    </div>
  );
};

export default Page;

