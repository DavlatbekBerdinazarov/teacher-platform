import React, { useContext, useState } from "react";
import { Input } from "@material-tailwind/react";
import { PatternFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ProjectContext } from "../layout/MainLayout";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

export default function Register() {
  
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [r_pass, setR_pass] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [isEyeOff, setIsEyeOff] = useState(true);
  const [isEyeOff_R, setIsEyeOff_R] = useState(true);

  const { setEnteredPhone } = useContext(ProjectContext);

  const navigate = useNavigate();

  const onsubmit = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z]{3,}$/.test(name)) {
      return setErrorMessage("Name invalid");
    }
    if (pass !== r_pass) {
      return setErrorMessage("password birxil emas");
    }

    setEnteredPhone(phone);

    axios
      .post("https://itlive.introdevs.site/api/verification/send", {
        type: "register",
        phone: "+" + phone,
      })
      .then((res) => {
        if (res.status === 201) {   
          window.localStorage.setItem("data", JSON.stringify(data));
          navigate("/verify-code");
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
        console.log(error);
      });
  };

  function handlerName(e) {
    setName(e.target.value);
  }
  function handlerPass(e) {
    setPass(e.target.value);
  }
  function handlerR_pass(e) {
    setR_pass(e.target.value);
  }

  return (
    <div className=" bg-main">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 select-none">
        <div className="h-[90vh] w-full right-0 flex items-center justify-center">
          <div className="w-full h-full z-30">
            <div className="md:w-[450px] h-full pt-5 z-10">
              <h1 className=" text-plum text-3xl font-semibold my-3">
                Ro'yxatdan o'tish
              </h1>
              <form className=" h-[470px]">
                {/* error alert */}
                {errorMessage ? (
                  <div
                    className="bg-red-100 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span className="block sm:inline">{errorMessage}</span>
                  </div>
                ) : null}

                <div className="my-4">
                  <label className=" text-plum font-semibold" htmlFor="name">
                    Ism Sharif
                  </label>
                  <Input
                    id="name"
                    type="text"
                    onChange={handlerName}
                    placeholder="Ism"
                    className=" text-lg !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{
                      className: "min-w-[300px] my-2 h-[60px] md:w-[450px]",
                    }}
                    required
                  />
                </div>
                <div className="my-4">
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
                <div className="w-full">
                  <label
                    className=" text-plum font-semibold"
                    htmlFor="password"
                  >
                    Parol
                  </label>
                  <div className="relative w-full bg-white">
                    <div
                      onClick={() => setIsEyeOff((prev) => !prev)}
                      className="absolute grid w-8 h-8 place-items-center text-plum top-2/4 right-6 -translate-y-2/4 z-40"
                    >
                      {isEyeOff ? (
                        <IoEyeOff className="text-2xl" />
                      ) : (
                        <IoEye className="text-2xl" />
                      )}
                    </div>
                    <Input
                      className="!border !border-gray-300 peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      id="password"
                      type={isEyeOff ? "password" : "text"}
                      onChange={handlerPass}
                      placeholder="Parol"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{
                        className:
                          " min-w-[300px] my-2 h-[60px] md:w-[450px] text-lg",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    className=" text-plum font-semibold"
                    htmlFor="password_R"
                  >
                    Parolni tasdiqlash
                  </label>
                  <div className="relative w-full bg-white">
                    <div
                      onClick={() => setIsEyeOff_R((prev) => !prev)}
                      className="absolute grid w-8 h-8 place-items-center text-plum top-2/4 right-6 -translate-y-2/4 z-40"
                    >
                      {isEyeOff_R ? (
                        <IoEyeOff className="text-2xl" />
                      ) : (
                        <IoEye className="text-2xl" />
                      )}
                    </div>
                    <Input
                      className="!border !border-gray-300 peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      type={isEyeOff_R ? "password" : "text"}
                      id="password_R"
                      onChange={handlerR_pass}
                      placeholder="Tasdiqlash"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{
                        className:
                          " min-w-[300px] my-2 h-[60px] md:w-[450px] text-lg",
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between z-10">
                  <button
                    onClick={onsubmit}
                    className="bg-plum mt-3 text-white w-full py-4 rounded-md active:text-deep-orange-50"
                  >
                    Ro'yxatdan o'tish
                  </button>
                </div>
              </form>
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
