type QuickLink = {
  text: string;
  url?: string;
  icon?: React.ReactNode;
};

type Props = {
  title: string;
  quickLinks: QuickLink[];
};

const QuickLinks = ({ title, quickLinks }: Props) => {
  return (
    <div className="text-white font-roboto space-y-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      {quickLinks.map((links) => (
        <div
          key={links.text}
          className="flex items-center gap-3 space-y-1 md:space-y-3 text-sm "
        >
          {links?.icon}
          <a
            className=" hover:text-primaryColor transition-all cursor-pointer"
            href={links.url}
          >
            {links.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
