import React from "react";

// CUSTOM COMPONENTS
import GestorButton from "@/components/generics/GestorButton";

// ACTIONS
import { submitLogin } from "@/app/auth/login/actions/submitLogin";

const Login = () => {
  return (
    <div>
      <form action={submitLogin}>
        <input type="text" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="password"/>

        <section>
          <GestorButton type="submit">LOGIN</GestorButton>
        </section>
      </form>
    </div>
  );
};

export default Login;
