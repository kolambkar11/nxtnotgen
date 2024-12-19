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
import { Pencil } from "lucide-react";
import React from "react";

const Editcomplaint = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-blue-400 p-2 rounded-full text-sm float-right hover:bg-orange-300 ">
        <Pencil />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Complaint</AlertDialogTitle>
          <AlertDialogDescription>
            Edit the required changes you want to perform.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-2"></div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Edit Complaint</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Editcomplaint;
