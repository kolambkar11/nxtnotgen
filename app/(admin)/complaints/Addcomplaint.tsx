import React, { useRef, useState } from "react";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { jurisdictionData } from "../../data/jurisdiction";
import axios from "axios";

type resultProps = {
  id: number;
  idCode: string;
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

const Addcomplaint = () => {
  const newDate = new Date();
  const [id, setId] = useState(1);
  const [idCode, setIdCode] = useState("1000");
  const [complaintDate, setComplaintDate] = useState("");
  const [username, setUserName] = useState("");
  const [platform, setPlatform] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [summary, setSummary] = useState("");
  // const [file, setFile] = useState("");
  // const [status, setStatus] = useState("pending");
  const [adminEmail, setAdminEmail] = useState("");
  // const [dateAdded, setDateAdded] = useState(newDate);
  // const [curIpAddress, setCurIpAddress] = useState("");
  const [APIData, setAPIData] = useState<resultProps[]>([]);
  // const IPGeo_URL = "https://api.ipgeolocation.io/ipgeo";
  // const IpAddress = useRef();

  //https://675bc38f9ce247eb19374d66.mockapi.io/nco/complaints

  const addComplaint = async () => {
    const newDate = new Date();
    try {
      const response = await axios.post(
        `https://675bc38f9ce247eb19374d66.mockapi.io/nco/complaints`,
        {
          id: id,
          idCode,
          complaintDate,
          username,
          platform,
          jurisdiction,
          postUrl,
          summary,
          file: "img.jpg",
          status: "in progress",
          adminEmail,
          dateAdded: newDate.toISOString(), // Format date properly
          ipAddress: "127.0.0.1",
        }
      );
      setId(id + 1);
      setAPIData((prev) => [...prev, response.data]); // Update UI locally
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectPlatform = (value: string) => {
    setPlatform(value);
  };
  const handleSelectJurisdiction = (value: string) => {
    setJurisdiction(value);
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="bg-blue-400 p-2 rounded-full text-sm float-right hover:bg-orange-300 ">
          <Plus />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add Complaint</AlertDialogTitle>
            <AlertDialogDescription>
              This is the form for adding the complaint please add all the
              required data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid gap-2">
            <Input
              readOnly
              onChange={(e) => setIdCode(e.target.value)}
              value={idCode}
            />
            <Input
              type="date"
              onChange={(e) => setComplaintDate(e.target.value)}
              value={complaintDate}
            />
            <Input
              placeholder="Enter Username"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
            <Select onValueChange={handleSelectPlatform} value={platform}>
              <SelectTrigger>
                <SelectValue placeholder="Select Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="x">X</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
              </SelectContent>
            </Select>
            <Select
              onValueChange={handleSelectJurisdiction}
              value={jurisdiction}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Jurisdiction" />
              </SelectTrigger>
              <SelectContent>
                {jurisdictionData.map((j: string, index: number) => {
                  return (
                    <SelectItem key={index} value={j}>
                      {j}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <Input
              placeholder="Enter URL"
              value={postUrl}
              onChange={(e) => setPostUrl(e.target.value)}
            />
            <Textarea
              placeholder="Enter Summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
            <Input type="file" placeholder="Add Screenshot" />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={addComplaint}>
              Add Complaint
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Addcomplaint;
