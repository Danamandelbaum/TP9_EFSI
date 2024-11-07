"use client";

import { TokenContext } from "../context/TokenContext";
import { useContext } from "react";
import { usePathname } from 'next/navigation'

export const ProtectedRoutes = ({ children }) => {
  const pathname = usePathname();
  const { isLoggedIn } = useContext(TokenContext);
  if (!isLoggedIn && pathname !== "/Login" && pathname !== "/Registro" && pathname !== "/Contacto" && pathname !== "/") {
    return (<h2>Acceso Restringido</h2>);
  }

  return children;
};
