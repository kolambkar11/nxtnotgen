"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Addcomplaint from "./Addcomplaint";
type resultProps = {
  id: number;
  idCode: any;
  complaintDate: string;
  username: string;
  platform: string;
  jurisdiction: string;
  postUrl: string;
  summary: string;
  file: string;
  status: string;
  adminEmail: string;
  dateAdded: string;
  ipAddress: string;
};

const Complaints = () => {
  const [APIData, setAPIData] = useState<resultProps[]>([]);
  console.log(APIData);
  function handleEdit(idc: number): any {
    console.log(idc);
  }
  function handleDelete() {
    alert("this is handle Delete");
  }
  function handleView() {
    alert("this is handle View");
  }

  useEffect(() => {
    const api = async () => {
      try {
        // https://675bc38f9ce247eb19374d66.mockapi.io/nco/complaints

        const response = await fetch(
          "https://675bc38f9ce247eb19374d66.mockapi.io/nco/complaints",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const jsonData = await response.json();
        // console.log(jsonData);
        setAPIData(jsonData);
      } catch (error) {
        console.log("error", error);
      }
    };
    api();
  }, []);
  return (
    <>
      <Addcomplaint />
      <Table className="w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-48">ID Code</TableHead>
            <TableHead className="w-48">Username</TableHead>
            <TableHead className="w-48">Platform</TableHead>
            <TableHead className="w-48">URL</TableHead>
            <TableHead className="w-48">Date</TableHead>
            <TableHead className="w-48">Status</TableHead>
            <TableHead className="w-48">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {APIData.map((a, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{a.idCode}</TableCell>
                <TableCell>{a.username}</TableCell>
                <TableCell>{a.platform}</TableCell>
                <TableCell>
                  <a href={a.postUrl} target="_blank">
                    View
                  </a>
                </TableCell>
                <TableCell>{a.dateAdded}</TableCell>
                <TableCell>{a.status}</TableCell>
                <TableCell className="flex justify-around">
                  <Pencil
                    className="cursor-pointer"
                    onClick={() => {
                      handleEdit(a.idCode);
                    }}
                  />
                  <Trash2 className="cursor-pointer" onClick={handleDelete} />
                  <Eye className="cursor-pointer" onClick={handleView} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Complaints;
