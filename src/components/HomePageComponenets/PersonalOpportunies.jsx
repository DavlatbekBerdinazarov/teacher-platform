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
        <div className="grid xl:grid-cols-3 h-full xl:h-[636px] gap-4 md:gap-6">
          <div className="lg:col-span-1 xl:min-w-[461px] p-2 md:p-6 h-full flex flex-col md:flex-row xl:flex-col md:flex-nowrap justify-start">
            <div className="h-[330px] w-full md:w-[340px] flex items-baseline justify-start relative">
              <img className="" src="/personal1.png" alt="" />
              <div className="w-[300px] h-[330px] absolute top-0 -right-4 sm:-right-8 flex items-center justify-end">
                <img src="/personal2.png" alt="" />
              </div>
            </div>
            <div className="h-[330px] w-[300px] flex gap-4 ">
              <img
                className="w-[165px] h-[244px]"
                src="/personal3.png"
                alt=""
              />
              <img className="w-[170px] sm:w-[190px] h-[200px] sm:h-[244px]" src="/personal4.png" alt="" />
            </div>
          </div>

          <div className="xl:col-span-2 xl:pl-8">
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
