import React from "react";

export default function PersonalOpportunies() {
  return (
    <div className="py-6 md:py-10 xl:py-16">
      <h1 className=" text-cherry text-xl font-semibold mt-12">
        bizning platforma
      </h1>

      <h1 className="text-4xl font-bold text-plum my-8">
        Shaxsiy imkoniyatlar
      </h1>
      <p className=" text-mutedtxt">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        animi non nemo, minima officiis quidem! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Temporibus.
      </p>

      <main>
        {/* main secton ...images */}
        <div className="grid xl:grid-cols-3 h-[636px] gap-8">
          <div className="lg:col-span-1 min-w-[461px] p-3 md:p-6">
            <div className="h-[330px] w-[400px] flex items-center justify-start relative">
              <img className="" src="/personal1.png" alt="" />
              <div className="w-[300px] h-[330px] absolute top-0 -right-5 flex items-center justify-end">
                <img src="/personal2.png" alt="" />
              </div>
            </div>
            <div className="h-[330px] w-[400px] flex gap-4">
              <img
                className="w-[165px] h-[274px]"
                src="/personal3.png"
                alt=""
              />
              <img className="w-auto h-[244px]" src="/personal4.png" alt="" />
            </div>
          </div>

          <div className="xl:col-span-2 pl-16">
            <h1 className="text-2xl font-bold text-plum my-8">
              Ta'lim uchun tizimli yondashuv
            </h1>

            <ul>
                <li className="flex gap-6 mb-8">
                    <div className="w-[50px] min-w-[50px] h-[50px] bg-[#ECECEC] rounded-full p-3">
                        <span className="text-cherry font-bold text-xl flex items-center justify-center">01</span>
                    </div>

                    <div>
                        <h1 className="font-bold text-plum text-lg">Sizga mos keluvchi kurslarni tanlashlik</h1>
                        <p className="text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo? Consequatur nobis quia fugit, veritatis cumque labore!</p>
                    </div>
                </li>
                <li className="flex gap-6 mb-8">
                    <div className="w-[50px] min-w-[50px] h-[50px] bg-[#ECECEC] rounded-full p-3">
                        <span className="text-cherry font-bold text-xl flex items-center justify-center">02</span>
                    </div>

                    <div>
                        <h1 className="font-bold text-plum text-lg">Sizga mos keluvchi kurslarni tanlashlik</h1>
                        <p className="text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo? Consequatur nobis quia fugit, veritatis cumque labore!</p>
                    </div>
                </li>
                <li className="flex gap-6 mb-8">
                    <div className="w-[50px] min-w-[50px] h-[50px] bg-[#ECECEC] rounded-full p-3">
                        <span className="text-cherry font-bold text-xl flex items-center justify-center">03</span>
                    </div>

                    <div>
                        <h1 className="font-bold text-plum text-lg">Sizga mos keluvchi kurslarni tanlashlik</h1>
                        <p className="text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo? Consequatur nobis quia fugit, veritatis cumque labore!</p>
                    </div>
                </li>
                <li className="flex gap-6 mb-8">
                    <div className="w-[50px] min-w-[50px] h-[50px] bg-[#ECECEC] rounded-full p-3">
                        <span className="text-cherry font-bold text-xl flex items-center justify-center">04</span>
                    </div>

                    <div>
                        <h1 className="font-bold text-plum text-lg">Sizga mos keluvchi kurslarni tanlashlik</h1>
                        <p className="text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo? Consequatur nobis quia fugit, veritatis cumque labore!</p>
                    </div>
                </li>
                <li className="flex gap-6 mb-8">
                    <div className="w-[50px] min-w-[50px] h-[50px] bg-[#ECECEC] rounded-full p-3">
                        <span className="text-cherry font-bold text-xl flex items-center justify-center">05</span>
                    </div>

                    <div>
                        <h1 className="font-bold text-plum text-lg">Sizga mos keluvchi kurslarni tanlashlik</h1>
                        <p className="text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo? Consequatur nobis quia fugit, veritatis cumque labore!</p>
                    </div>
                </li>
                <li className="flex gap-6 mb-8">
                    <div className="w-[50px] min-w-[50px] h-[50px] bg-[#ECECEC] rounded-full p-3">
                        <span className="text-cherry font-bold text-xl flex items-center justify-center">06</span>
                    </div>

                    <div>
                        <h1 className="font-bold text-plum text-lg">Sizga mos keluvchi kurslarni tanlashlik</h1>
                        <p className="text-[14px] font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo? Consequatur nobis quia fugit, veritatis cumque labore!</p>
                    </div>
                </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
