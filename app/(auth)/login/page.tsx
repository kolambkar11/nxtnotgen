import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="py-10 w-1/2 mx-auto">
      <h1 className="text-2xl text-center mb-4">Login</h1>
      <Input placeholder="Enter Email" />
      <Link href="/forgot-password">Forgot Password</Link>
      <Link href="/registration">Registration</Link>
    </div>
  );
};

export default Login;
