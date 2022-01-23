import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { LoginModalState } from "../context/loginModalContext";
import Layout from "../components/layout";
import PageContainer from "../components/pageContainer";
import { navigate } from "@reach/router";

const Account = () => {
  const { setLoginModalVisibility } = LoginModalState();
  const { user, getUser } = useAuth();
  const [componentHasMounted, setComponentHasMounted] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (!user || user.gebruikerID === 0) {
      navigate("/");
      console.log("no user");
      setLoginModalVisibility(true);
    } else {
      setComponentHasMounted(true);
    }
  }, []);

  if (!componentHasMounted) {
    return null;
  }

  return (
    <Layout>
      <PageContainer fullPage>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <h2>id:</h2> <span>{user.gebruikerID}</span>
        <h2>rol:</h2>
        <span>{user.role}</span>
      </PageContainer>
    </Layout>
  );
};

export default Account;
