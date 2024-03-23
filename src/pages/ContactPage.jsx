import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Consultation from "../components/HomePageComponenets/Consultation";

export default function ContactPage() {
  return (
    <div>
      <div className=" bg-main pt-12 pb-5">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10">
          <span className="h-2 w-24 rounded-sm bg-cherry block"></span>
          <h1 className=" capitalize text-4xl font-bold text-plum my-8">
            Kontaktlar
          </h1>
        </div>
      </div>

      {/* main information */}
      <div className="max-w-[1440px] mx-auto px-2 sm:px-5 lg:px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-plum font-bold py-10">
          <div className=" col-span-1 h-full ">
            <div className="mb-12">
              <h3 className="text-lg">Yagona aloqa operatori</h3>

              <article className="flex items-center gap-3 text-cherry text-xl my-5">
                <BsTelephoneFill /> <span>+998 (33) 408-28-08</span>
              </article>
            </div>
            <div> 
              <h3 className="text-lg">Bizning ichtimoiy tarmoqlar</h3>

              <article className="flex items-center gap-3 text-cherry text-2xl mt-5">
                <FaInstagram />
                <BsTelegram />
                <FaFacebook />
              </article>
            </div>
          </div>

          {/* map */}
          <div className=" col-span-1 h-full ">
            <div className="mb-8">
              <h3 className="text-lg">Bizning manzil</h3>

              <article className="flex items-center gap-3 text-cherry text-xl my-5">
                <FaLocationDot />{" "}
                <span>Markaziy ko'cha Milliy bank ro'parasi</span>
              </article>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6153809.247067936!2d64.60769505370615!3d41.13911725464577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b207ac5e50942b%3A0xc672808b9c46d45a!2sIT%20LIVE%20ACADEMY!5e0!3m2!1suz!2s!4v1711222633900!5m2!1suz!2s"
                height="200"
                width="100%"
                style={{ border: "0" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
        <div>
          <Consultation/>
        </div>
    </div>
  );
}
