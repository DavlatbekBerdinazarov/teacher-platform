import { Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { PatternFormat } from "react-number-format";

import { Textarea, Button } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";

export default function Consultation() {
  const [phone, setPhone] = useState("");
  return (
    <div className="w-full h-[400px] xl:h-[373px] relative flex items-center justify-center">
      <img
        className=" object-cover overflow-hidden w-full h-full"
        src="/consultationbg.avif"
        alt="wefwef"
      />
      <div className="w-full h-full absolute bg-plum opacity-80 top-0"></div>
      <div className="grid grid-cols-12 md:gap-8 w-full h-full absolute top-0 text-white max-w-[1440px] px-4 sm:px-6 lg:px-12 py-6 xl:py-9 ">
        <div className="col-span-12 md:col-span-7 xl:col-span-6 h-full bg-white rounded-2xl text-plum p-6">
          <h1 className="text-plum font-bold text-xl">
            Ma'lumotlaringizni kiriting!
          </h1>
          <form>
            <div className="flex flex-col xl:flex-row justify-between my-1 gap-3">
              <div className="">
                <Input
                  id="name"
                  type="text"
                  placeholder="Ism"
                  className=" w-full xl:w-[255px] text-lg !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{
                    className: "h-10 ",
                  }}
                />
              </div>
              <div className="">
                <PatternFormat
                  customInput={Input}
                  id="phone"
                  format="+998 (##) ### - ## - ##"
                  required
                  autoComplete="off"
                  allowEmptyFormatting
                  mask="_"
                  valueIsNumericString={true}
                  className="h-12 w-full xl:w-[255px] text-lg !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  labelProps={{
                    className: "hidden ",
                  }}
                  containerProps={{
                    className: "",
                  }}
                />
              </div>
            </div>
            {/* textarea */}
            <div className="w-full h-[110px] mb-4">
              <Textarea
                label="Message"
                placeholder="Izoh..."
                className=" w-full my-2 text-lg !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{
                  className: "h-12 w-full",
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  className=" checked:bg-cherry checked:border-none"
                  defaultChecked
                />
                <p className="text-sm text-mutedtxt">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <Button className="bg-cherry text-white" type="submit">
                Yuborish
              </Button>
            </div>
          </form>
        </div>
        <div className="hidden md:flex col-span-4 ml-4 xl:col-span-6 items-center justify-center pb-12 pr-12">
          <div>
            <span className="h-2 w-20 rounded-sm bg-cherry block"></span>
            <h1 className=" capitalize text-3xl font-bold text-white my-8">
              Kansultatsiya uchun
            </h1>
            <p className=" text-white">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
