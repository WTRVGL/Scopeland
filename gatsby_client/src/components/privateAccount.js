import React from "react";
import { useAuth } from "../context/authContext";
import { navigate } from "gatsby";
import Layout from "./layout";

const PrivateAccount = () => {
  const { user } = useAuth();

  if (Object.keys(user).length === 0) {
    navigate("/login");
    return null;
  }

  return (
    <Layout>
      <div>PRIVE YOOOOOO</div>
    </Layout>
  );
};

export default PrivateAccount;
