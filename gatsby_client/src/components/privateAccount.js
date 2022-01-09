import React from "react";
import { useAuth } from "../context/authContext";
import { LoginModalState } from "../context/loginModalContext";
import Layout from "./layout";
import PageContainer from "./pageContainer";
import { navigate } from "@reach/router";
const PrivateAccount = () => {
  const { user, isAuthenticated } = useAuth();
  const { setLoginModalVisibility } = LoginModalState();

  if (!isAuthenticated()) {
    navigate("/");
    console.log("no user")
    setLoginModalVisibility(true);
    return null;
  }

  return (
    <Layout>
      <PageContainer fullPage>private route</PageContainer>
    </Layout>
  );
};

export default PrivateAccount;
