import Image from "next/image";
import React from "react";

import { News } from "./news";
import { Articles, ArticleProps } from "./articles";

function Hero() {
  const data: ArticleProps[] = [
    {
      id: 1,
      src: "/images/image-gaming-growth.jpg",
      title: "Gaming Growth",
      text: "Unlock the world of gaming growth today!",
    },
    {
      id: 2,
      src: "/images/image-retro-pcs.jpg",
      title: "Retro PCs",
      text: "Step back in time with retro PCs.",
    },
    {
      id: 3,
      src: "/images/image-top-laptops.jpg",
      title: "Top Laptops",
      text: "Discover the best laptops for your needs.",
    },
  ];
  return (
    <div>
      <div className="py-3 p-3 md:px-0 my-3 lg:px-20 mx-auto h-fit md:h-[450px] py-auto flex flex-col gap-5 md:flex-row md:mx-0 relative">
        <div className="mx-auto w-full md:w-2/3 md:mx-0 h-[620px] flex flex-col justify-evenly md:block">
          <HeroContent />
          <div className="flex flex-col md:flex-row justify-evenly h-2/6 items-center">
            <h1 className="w-full font-extrabold text-[2.5rem] md:p-4">
              The Bright Future of Web 3.0?
            </h1>
            <div>
              <HeroText />
              <button className="m-2 ml-0 md:m-5 md:ml-0 block w-1/2 h-9 bg-soft-red bold text-white hover-bg-very-dark-blue transition-all duration-200">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <News />
      </div>
      <Articles data={data} />
    </div>
  );
}

export default Hero;

function HeroContent() {
  return (
    <div className="w-full h-[200px] md:h-2/5 relative">
      <Image
        src="/images/image-web-3-desktop.jpg"
        fill
        alt="hero img"
        className=""
      />
    </div>
  );
}

function HeroText() {
  return (
    <div className="flex flex-col justify-between h-fit">
      <p className="font-regular text-sm pt-4">
        Mollit sint incididunt non eiusmod anim. Amet nulla esse ex nisi sunt et
        non anim voluptate commodo commodo in voluptate nisi. Laboris eu esse
        fugiat pariatur dolore.
      </p>
    </div>
  );
}
