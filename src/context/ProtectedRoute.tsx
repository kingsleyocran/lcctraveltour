import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { sessionData } = useAuth();

  useEffect(() => {
    if (!sessionData.uid) {
      router.push("/dashboard");
    }
    
  }, [router, sessionData.user]);
  return <div>{sessionData ? children : null}</div>;
};

export default ProtectedRoute;