"use client";

import { TokenContext } from "../context/TokenContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn } = useContext(TokenContext);

  if (!isLoggedIn && router.pathname == "/Login" && router.pathname == "/Registro" && router.pathname == "/Contacto") {
    return (<h2>Acceso Restringido</h2>);
  }

  return children;
};
