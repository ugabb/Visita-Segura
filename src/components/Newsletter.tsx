import { FormEvent, useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmailInput = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setEmail(inputValue);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 bg-primaryColor flex flex-col lg:flex-row justify-center items-center text-white font-roboto gap-5"
    >
      <div className="lg:w-1/2 space-y-2 text-center">
        <h2 className="text-4xl font-bold lg:whitespace-nowrap">
          Assine nosso Newsletter
        </h2>
        <p className="text-lg">Registre-se agora para receber atualizações.</p>
      </div>

      <div className="w-full lg:w-auto flex flex-col md:flex-row">
        <input
          dir="ltr"
          type="email"
          className="rounded-t-lg w-full md:w-[458px] px-5 py-3 text-black md:rounded-s-xl md:rounded-t-none hover:bg-lightBlue hover:placeholder:text-secondaryColor focus:outline-none"
          placeholder="Digite seu e-mail para se inscrever..."
          onChange={handleEmailInput}
          required
        />
        <button
          dir="rtl"
          type="submit"
          className="uppercase text-sm bg-secondaryColor rounded-b-lg px-5 py-3 md:rounded-s-lg md:rounded-b-none hover:bg-lightBlue hover:text-secondaryColor transition-all"
        >
          Assinar
        </button>
      </div>
    </form>
  );
};

export default Newsletter;
