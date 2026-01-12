import React, { JSX } from "react";

// CUSTOM COMPONENTS
import GestorHeader from "@/gestor-components/GestorHeader";

export default function Home(): JSX.Element {
  return (
   <main>
    <GestorHeader />
    <span>Hello World!!!</span>
   </main>
  );
}
