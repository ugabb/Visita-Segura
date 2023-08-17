import { ReactNode } from "react";

type Props = {
  site: string;
  icon?: ReactNode;
};

const SocialSite = ({ site, icon }: Props) => {
  return (
    <div className="w-[31px] h-[31px] flex justify-center items-center rounded-full bg-primaryColor hover:scale-110 hover:rotate-12 transition-all cursor-pointer">
      <a href={site} target="_blank">
        {icon}
      </a>
    </div>
  );
};

export default SocialSite;
