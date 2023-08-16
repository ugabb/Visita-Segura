import { ReactNode } from "react";

type Props = {
  text: string;
  icon?: ReactNode;
};

const TextWithIcon = ({ text, icon }: Props) => {
  return (
    <div className="flex gap-2">
      {icon}
      <p className="text-slateGray text-sm font-inter">{text}</p>
    </div>
  );
};

export default TextWithIcon;
