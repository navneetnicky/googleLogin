import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const clientId =
    "485695095948-trfh6rqh93ittnff0hnidphct079fn2v.apps.googleusercontent.com";

  const onLoginGoogleSuccess = (res) => {
    if (res.profileObj) {
      navigate("/dashboard");
    }
  };

  const onFailureGoogleSuccess = (res) => {
    console.log("Google Login Fail");
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onLoginGoogleSuccess}
        onFailure={onFailureGoogleSuccess}
        cookiePolicy={"single_host_origin"}
        theme="dark"
        type="button"
        className="p-0 mb-2"
      />
    </div>
  );
};

export default GoogleLoginButton;
