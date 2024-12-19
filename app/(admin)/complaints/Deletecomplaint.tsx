import axios from "axios";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus } from "lucide-react";

const Deletecomplaint = () => {
  //   const handleDelete = async (id: number) => {
  //     if (window.confirm("Are you sure you want to delete this data?")) {
  //       try {
  //         await axios.delete(
  //           `https://675bc38f9ce247eb19374d66.mockapi.io/nco/complaints/${id}`
  //         );
  //         // setAPIData((prev) => prev.filter((item) => item.id !== id)); // Update UI locally
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-blue-400 p-2 rounded-full text-sm float-right hover:bg-orange-300 ">
          <Plus />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Complaint</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the complaint?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid gap-2"></div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete Complaint</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Deletecomplaint;
