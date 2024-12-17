import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link href="/forgot-password">Forgot Password</Link>
      <Link href="/registration">Registration</Link>
    </div>
  );
};

export default Login;
