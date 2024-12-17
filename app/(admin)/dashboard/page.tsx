import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Dashboard | Notice Generator",
  description: "Dashboard Page for Notice Generator",
};

const Dashboard = () => {
  return (
    <section className="p-4">
      <h1>Dashboard</h1>
      <div className="w-full bg-red-400 flex justify-between">
        <div> 1</div>
        <div> 1</div>
        <div> 1</div>
      </div>
    </section>
  );
};

export default Dashboard;
