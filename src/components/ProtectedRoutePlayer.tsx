'use client'
import { useUserStore } from "@/store";
import { redirect } from "next/navigation";

export const ProtectedRoute = ({children}:{ children: React.ReactNode }) => {
  const isAuthenticated = useUserStore(state => state.logged)
  if(!isAuthenticated){
    redirect("/");
  }
  
  return children;
};