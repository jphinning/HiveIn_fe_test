import React from "react";

import GoogleButton, {
  Text,
  Image,
} from "components/UI/googleAuthButton/GoogleAuthButtonStyles";
import google from "components/UI/googleAuthButton/imgs/google.svg";

interface GoogleAuthButtonProps {
  children: React.ReactNode;
}

function GoogleAuthButton({ children }: GoogleAuthButtonProps) {
  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <GoogleButton onClick={() => googleLogin()}>
      <Image alt="Google" src={google} />
      <Text>{children}</Text>
    </GoogleButton>
  );
}

export default GoogleAuthButton;
