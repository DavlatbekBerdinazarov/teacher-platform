import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPField from "../components/global/OTPField";
import { ProjectContext } from "../layout/MainLayout";

import axios from "axios";

export default function EnterCodePage() {
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const { setIsAuth, isAuth, enteredPhone } = useContext(ProjectContext);

  const navigate = useNavigate();

  function HandleClick(e) {
    e.preventDefault();
    let data = window.localStorage.getItem("data");
    data = JSON.parse(data);
    const phone1 = data.phone;

    axios
      .post("https://itlive.introdevs.site/api/verification/verify", {
        type: "register",
        phone: "+" + phone1,
        otp: otp.join(""),
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          axios
            .post("https://itlive.introdevs.site/api/auth/register", {
              phone: "+" + phone1,
              otp:otp.join(""),
              fullName: data.name,
              password: data.pass,
            })
            .then((res) => {
              console.log("register code =>",res);
              if (res.status === 201) {
                console.log(res);
                window.localStorage.setItem(
                  "accessToken",
                  res.data.accessToken
                );
                window.localStorage.setItem(
                  "refreshToken",
                  res.data.refreshToken
                );
                setIsAuth(!isAuth);
                navigate("/");
              }
            })
            .catch((error) => {
              setErrorMessage(error.response.data.message);
              console.log(error);
            });
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        console.log(error);
      });
  }

  return (
    <div className="bg-main">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10 select-none">
        <div className="h-[90vh] w-full right-0 flex items-center justify-center">
          <div className="w-full h-full z-30">
            <div className="md:w-[500px] h-full pt-5 z-10">
              <h1 className=" text-plum text-3xl font-semibold my-3">
                Kodni kiriting
              </h1>
              <p>
                Biz sizga faollashtiruvchi kalit bilan kodni yubordik{" "}
                <span className="font-semibold text-plum">+{enteredPhone}</span>{" "}
                raqamiga
              </p>
              <div className=" h-[470px] my-8">
              {/* alert error */}
              {
                errorMessage ? (
                  <div class="bg-red-100 text-red-700 px-4 py-3 rounded relative" role="alert">
                      <span class="block sm:inline">{errorMessage}</span>
                  </div>
                ) : null
              }
                <label className="font-semibold ">
                  Smsdan kelgan kodni kiriting
                </label>
                <OTPField otp={otp} setOtp={setOtp}/>
                <div className="my-6">
                  <p>
                    Kodni haliyam olmadingizmi ?{" "}
                    <span className="text-plum font-semibold">
                      Qayta jo'natish
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between z-10">
                  <button
                    onClick={ HandleClick }
                    className="bg-plum mt-3 text-white w-full py-4 rounded-md active:text-deep-orange-50"
                  >
                    Kodni tasdiqlash
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            className="hidden xl:block absolute bottom-0 right-0 z-0"
            src="header_bg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
