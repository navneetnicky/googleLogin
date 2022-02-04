import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const GoogleLogoutButton = () => {
  const navigate = useNavigate();
  const clientId =
    "485695095948-trfh6rqh93ittnff0hnidphct079fn2v.apps.googleusercontent.com";
  const onSignoutSuccess = (res) => {
    console.clear();
    navigate("/");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        type="button"
        onLogoutSuccess={onSignoutSuccess}
        theme="dark"
      ></GoogleLogout>
    </div>
  );
};

export default GoogleLogoutButton;
