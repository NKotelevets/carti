import React, { FC, useEffect, useState } from "react";
import * as Yup from "yup";
import ReactPlayer from "react-player";
import { StyledAuthScreens } from "../styles/screens/AuthScreens";
import { PhoneAuth } from "../components/PhoneAuth";
import { Link } from "react-router-dom";

interface Values {
  email: string;
  password: string;
}

type LoginError = {
  data: {
    detail: string;
  };
  status: number;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("Required."),
  password: Yup.string().max(50, "Too Long!").required("Required."),
});

const ResetSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("Required."),
});

export const SignIn: FC = () => {
  return (
    <StyledAuthScreens>
      <ReactPlayer
        className="player"
        url={
          "https://s3-figma-videos-production-sig.figma.com/video/978649961378621333/TEAM/af98/3fb8/-fcf3-41ac-86ae-780ecf0dbb0a?Expires=1694995200&Signature=Zwso5hNUudsuTUc9yxG9blqVbsKlDAX0saTHBlvUHHZx5wjq~FnpRisOdkmZeil8azq7MEnM60xoIiDg4elimMiJxdA0ERa36ORn7eErO0OZsvzsv7VQWheeJknpKHQdGDWwJ0GtzqbS9~pjIAuseHL-JVgp3~OKj61toM70oHdYa0OqBbpr5usqUNrf19eNZzurYhQahHFhgi5V3IlUj7LQSwxjS8GAhW0FTbCYQiLsWfaHbK5VhQprzrg9AYl-vXG9PFJok-pgizKcAVGFKn~hna5syLKd34XynbCdfG1Ol7kOmzN2PM1TebyPMAO-eRVVqxUlnuVPDq7NkGOvyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
        width="100%"
        height="100%"
        playing
        loop
        muted
        playsinline
        stopOnUnmount
      />
      <div className="content-wrapper">
        <div className="form-wrapper">
          <PhoneAuth
            title={"LOG IN TO YOUR ACCOUNT"}
            subtitle={"Don’t have an account? "}
            subtitleLinkText={"Create Account"}
            subtitleLinkPath={"/"}
            stepsCount={2}
          />
        </div>
        <div className="footer-wrapper">
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </StyledAuthScreens>
  );
};

export default SignIn;
