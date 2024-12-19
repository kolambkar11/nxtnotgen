import { Metadata } from "next";
import React from "react";
import ComplaintsTable from "./Complaints";
export const metadata: Metadata = {
  title: "Complaints | Notice Generator",
  description: "Complaints Page for Notice Generator",
};

const Complaints = () => {
  return (
    <section className="p-4">
      <h1 className="text-center text-4xl my-4">Complaints</h1>
      <ComplaintsTable />
    </section>
  );
};

export default Complaints;
