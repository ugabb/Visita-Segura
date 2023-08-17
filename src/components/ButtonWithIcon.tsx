import { ReactNode } from "react";

type Props = {
  text: string;
  icon?: ReactNode;
};

const ButtonWithIcon = ({ text, icon }: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 text-white text-xl font-inter bg-primaryColor rounded-md w-full px-5 py-3 hover:bg-lightBlue hover:text-primaryColor transition-all`}
    >
      {icon}
      {text}
    </button>
  );
};

export default ButtonWithIcon;
