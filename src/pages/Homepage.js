import React from "react";
import { useAuth } from "../hooks/AuthProvider";

const Homepage = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>HELLO {user?.username}</h1>
    </>
  );
};
export default Homepage;
