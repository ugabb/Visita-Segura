type Props = {
  text: string;
  px: string;
  py: string;
};

const DefaultButton = ({ text, px, py }: Props) => {
  return (
    <button
      className={`text-white font-inter bg-primaryColor rounded-md px-10 py-5`}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
