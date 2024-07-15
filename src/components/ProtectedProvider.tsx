"use client";
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

const ProtectedProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      redirect("/");
    }
  }, []);
  return <>{children}</>;
};
export default ProtectedProvider;
