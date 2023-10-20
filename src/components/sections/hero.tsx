import Image from "next/image";
import React from "react";

interface NewsHeaderProps {
  title: string;
  content: string;
}

function Hero() {
  return (
    <div className="py-3 p-3 md:px-0 my-3 lg:px-20 mx-auto h-fit md:h-[450px] py-auto flex flex-col gap-5 md:flex-row md:mx-0 relative">
      <div className="mx-auto w-full md:w-2/3 md:mx-0 h-[620px] flex flex-col justify-evenly md:block">
        <div className="w-full h-[200px] md:h-3/5 relative">
          <Image
            src="/images/image-web-3-desktop.jpg"
            fill
            alt="hero img"
            className=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly h-2/5 ">
          <h1 className="h-full auto w-full font-extrabold text-5xl md:p-4">
            The Bright Future of Web 3.0?
          </h1>
          <div className="flex flex-col justify-between h-fit ">
            <div className="p-5 flex flex-col justify-between h-fit w-full">
              <p className="font-regular text-sm pt-4">
                Mollit sint incididunt non eiusmod anim. Amet nulla esse ex nisi
                sunt et non anim voluptate commodo commodo in voluptate nisi.
                Laboris eu esse fugiat pariatur dolore.
              </p>
            </div>
            <button className=" m-5 block w-1/2 h-9 bg-soft-red bold text-white hover:bg-very-dark-blue transition-all duration-200">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <News></News>
    </div>
  );
}

export default Hero;

const News: React.FC = ({ props }: any) => {
  return (
    <div className="w-full md:w-1/3 h-[420px] md:h-auto bg-very-dark-blue p-4 flex flex-col justify-evenly">
      <h1 className="text-soft-orange text-3xl font-extrabold">New</h1>
      <NewsHeader
        title="Elit nisi amet quis dolor."
        content="Labore dolor laborum ea duis sunt qui enim."
      />
      <hr className="h-1 w-full pink-500 mx-auto" />
      <NewsHeader
        title="Velit ipsum elit proident."
        content="Eiusmod eiusmod laborum commodo quis occaecat velit ea ea excepteur."
      />
      <hr className="h-1 w-full mx-auto" />
      <NewsHeader
        title="Aliquip fugiat ad commodo."
        content="Laborum ipsum mollit officia cupidatat reprehenderit."
      />
    </div>
  );
};
const NewsHeader: React.FC<NewsHeaderProps> = ({ title, content }) => {
  return (
    <div>
      <h2 className="pt-2 text-off-white font-bold text-lg hover:text-soft-orange cursor-pointer">
        {title}
      </h2>
      <p className="text-dark-grayish-blue font-sm text-md">{content}</p>
    </div>
  );
};
