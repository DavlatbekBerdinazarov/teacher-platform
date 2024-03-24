import React, { useContext, useState } from "react";
import { Input } from "@material-tailwind/react";
import { PatternFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
import { ProjectContext } from "../layout/MainLayout";
import axios from "axios";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const { setIsAuth, isAuth } = useContext(ProjectContext);

  const navigate = useNavigate();

  const LoginClick = () => {
    axios
      .post("https://itlive.introdevs.site/api/auth/login", {
        phone: "+" + phone,
        password: pass,
      })
      .then((res) => {
        console.log(res);
        if (res.status == 201) {
          window.localStorage.setItem("accessToken", res.data.accessToken);
          window.localStorage.setItem("refreshToken", res.data.refreshToken);
          setIsAuth(!isAuth);
          navigate("/");
          alert("successfull");
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data.message);
      });
  }
  return (
    <div className="bg-main">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 select-none">
        <div className="h-[90vh] w-full right-0 flex items-center justify-center">
          <div className="w-full h-full z-30">
            <div className="md:w-[450px] h-full pt-5 z-10">
              <h1 className=" text-plum text-3xl font-semibold my-6">Kirish</h1>

              <div className=" h-[470px]">

                {/* ERROR ALERT */}
                {errorMessage ? (
                  <div
                    class="bg-red-100 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span class="block sm:inline">{errorMessage}</span>
                  </div>
                ) : null}
                <div className="my-8">
                  <label className=" text-plum font-semibold " htmlFor="phone">
                    Telefon
                  </label>
                  <PatternFormat
                    customInput={Input}
                    id="phone"
                    format="+998 (##) ### - ## - ##"
                    required
                    autoComplete="off"
                    allowEmptyFormatting
                    mask="_"
                    valueIsNumericString={true}
                    className=" text-lg !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{
                      className:
                        " min-w-[300px] my-2 h-[60px] md:w-[450px] text-lg",
                    }}
                  />
                </div>
                <div className="my-8">
                  <label
                    className=" text-plum font-semibold"
                    htmlFor="password"
                  >
                    Parol
                  </label>
                  <Input
                    id="password"
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Parol"
                    className=" text-lg !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{
                      className: "min-w-[300px] my-2 h-[60px] md:w-[450px]",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between z-10">
                  <Link className=" text-plum font-semibold">
                    Parolni unutdizmi?
                  </Link>
                  <button
                    onClick={LoginClick}
                    className="bg-plum text-white w-[180px] md:w-[250px] py-3 rounded-md active:text-deep-orange-50"
                  >
                    Kirish
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
