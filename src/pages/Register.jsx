import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { PatternFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Register() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [r_pass, setR_pass] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const data = { name, phone, pass, r_pass};
  const navigate = useNavigate();

  const onsubmit = (e) => {
    e.preventDefault();
    if(!(/^[a-zA-Z]{3,}$/.test(name))){
      return setErrorMessage("Name invalid")
    }
    if(pass !== r_pass){
      return setErrorMessage("password birxil emas")
    }

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
                    class="bg-red-100 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span class="block sm:inline">{errorMessage}</span>
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
                <div className="my-4">
                  <label
                    className=" text-plum font-semibold"
                    htmlFor="password"
                  >
                    Parol
                  </label>
                  <Input
                    id="password"
                    type="password"
                    onChange={handlerPass}
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
                <div className="my-4">
                  <label
                    className=" text-plum font-semibold"
                    htmlFor="password_R"
                  >
                    Parolni tasdiqlash
                  </label>
                  <Input
                    id="password_R"
                    type="password"
                    onChange={handlerR_pass}
                    placeholder="Tasdiqlash"
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
