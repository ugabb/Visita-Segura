type Props = {
  text: string;
};

const DefaultButton = ({ text }: Props) => {
  return (
    <button
      className={`text-white text-xs lg:text-base font-inter bg-primaryColor rounded-md px-10 py-5`}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
