import React from "react";
import { Router } from "@reach/router";
import PrivateAccount from "../../components/privateAccount";

const Account = () => {
  return (
    <Router basepath="/account">
      <PrivateAccount path="/" />
    </Router>
  );
};

export default Account;
