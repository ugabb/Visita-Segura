import { ReactNode } from "react";

type Props = {
  site: string;
  icon?: ReactNode;
};

const SocialSite = ({ site, icon }: Props) => {
  return (
    <div className="w-[31px] h-[31px] flex justify-center items-center rounded-full bg-primaryColor">
      <a href={site} target="_blank">
        {icon}
      </a>
    </div>
  );
};

export default SocialSite;
