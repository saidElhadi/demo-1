type ArticleProps = {
  id?: number;
  src?: string;
  title?: string;
  text?: string;
};
const Articles = ({ data }: any & ArticleProps[]) => {
  return (
    <div
      className="py-3 p-3 md:px-0 my-3 lg:px-20 mx-auto md:h-fit py-auto
       flex flex-col gap-5 md:flex-row md:mx-0 
       relative "
    >
      {data.map((elem: ArticleProps) => {
        return (
          <Article
            src={elem.src}
            id={elem.id}
            key={elem.id}
            text={elem.text}
            title={elem.title}
          />
        );
      })}
    </div>
  );
};
const Article = ({ id, src, title, text }: ArticleProps) => {
  return (
    <div className="flex pt-3 pb-3 w-[300px] ">
      <img className="w-1/3" src={src} alt={`img of a ${src}`} />
      <div>
        <h1 className="pl-1 p-1 text-3xl font-bold text-gray-300">0{id}</h1>
        <h1 className="p-2 text-xl font-bold hover:text-soft-red cursor-pointer">{title}</h1>
        <p className="pl-2 text-sm font-regular text-gray-400">{text}</p>
      </div>
    </div>
  );
};

export { Articles };
export type { ArticleProps };
