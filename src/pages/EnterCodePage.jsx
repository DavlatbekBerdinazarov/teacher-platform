import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPField from "../components/global/OTPField";
export default function EnterCodePage() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const onsubmit = () => {
    navigate("/verify-code");
  };
  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10 select-none">
        <div className="h-[90vh] w-full right-0 flex items-center justify-center">
          <div className="w-full h-full z-30">
            <div className="md:w-[500px] h-full pt-5 z-10">
              <h1 className=" text-plum text-3xl font-semibold my-3">
                Kodni kiriting
              </h1>
              <p>Biz sizga faollashtiruvchi kalit bilan kodni yubordik <span className="font-semibold text-plum">+998932334343</span> raqamiga</p>
              <div className=" h-[470px] my-8">
              <label className="font-semibold ">Smsdan kelgan kodni kiriting</label>
                <OTPField/>
                <div className="my-6">
                  <p>Kodni haliyam olmadingizmi ? <span className="text-plum font-semibold">Qayta jo'natish</span></p>
                </div>
                <div className="flex items-center justify-between z-10">
                  <button
                    onClick={onsubmit}
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
