import { Redirect, Router } from "@reach/router";
import React from "react";
import Layout from "../../components/layout";
import Yo from "../../components/yo";

const Account = () => {
  return (
    <Layout>
      <Router basepath="/account">
        <Yo path="/yo" />
      </Router>
    </Layout>
  );
};

export default Account;
