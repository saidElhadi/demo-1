interface NewsHeaderProps {
  title: string;
  content: string;
}
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

export { News };
