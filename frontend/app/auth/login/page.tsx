import React from "react";
import Link from "next/link";

// CUSTOM COMPONENTS
import GestorButton from "@/gestor-components/generics/GestorButton";

// ACTIONS
import { submitLogin } from "@/app/auth/login/actions/submitLogin";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        action={submitLogin}
        className="bg-amber-50 flex flex-col items-center justify-center rounded p-14"
      >
        <div className="flex flex-col gap-6">
          <div className="grid gap-2 max-w-sm">
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
          </div>

          <div className="grid gap-2">
            <GestorButton type="submit">LOGIN</GestorButton>
          </div>

          <div className="flex gap-1 max-w-sm">
            <span className="text-gray-950">
              If you {"don't"} have a account try
            </span>
            <Link
              className="text-blue-500 hover:underline"
              href="/auth/register"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
