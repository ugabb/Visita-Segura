import FacebookLogo from "../icons/FacebookLogo";
import InstagramLogo from "../icons/InstagramLogo";
import { LinkedinLogo } from "../icons/LinkedinLogo";
import Location from "../icons/Location";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";
import TwitterLogo from "../icons/TwitterLogo";

import QuickLinks from "./QuickLinks";
import SocialSite from "./SocialSite";

interface SocialSites {
  url: string;
  icon: React.ReactNode;
}

const socialSites: SocialSites[] = [
  {
    url: "https://www.facebook.com/",
    icon: <FacebookLogo />,
  },
  {
    url: "https://www.instagram.com/",
    icon: <InstagramLogo />,
  },
  {
    url: "https://www.linkedin.com/",
    icon: <LinkedinLogo />,
  },
  {
    url: "https://twitter.com/",
    icon: <TwitterLogo />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondaryColor px-5 py-20 space-y-5">
      <div className="flex flex-col lg:flex-row gap-5 lg:mx-auto lg:justify-center lg:items-center lg:w-2/3">
        <div className="flex flex-col md:flex-row lg:flex-col justify-center md:justify-around items-center lg:items-start gap-2 lg:gap-5 lg:w-1/3">
          <img src="./logo-white.png" alt="" className="w-[106px]" />
          <p className="md:w-1/2 lg:w-full text-center md:text-left font-inter text-sm text-white">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy text of the printing.
          </p>
          <div className="flex md:justify-start gap-10 md:gap-5">
            {socialSites.map((icon) => (
              <SocialSite key={icon.url} icon={icon.icon} site={icon.url} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:justify-items-center gap-5 lg:w-4/5">
          <QuickLinks
            quickLinks={[
              { text: "Home", url: "/" },
              { text: "Sobre", url: "/sobre" },
              { text: "FAQ", url: "/faq" },
              { text: "Serviços", url: "/servicos" },
            ]}
            title="Links Rápidos"
          />

          <QuickLinks
            quickLinks={[
              { text: "Vendas", url: "/vendas" },
              { text: "Aluguel", url: "/aluguel" },
              { text: "Visita Segura", url: "/visista segura" },
            ]}
            title="Serviços"
          />

          <QuickLinks
            quickLinks={[
              { text: "Brasília Distrito Federal", icon: <Location /> },
              { text: "+55 61 9.9129 9129", icon: <Phone /> },
              { text: "info@skymedia.com.br", icon: <Mail /> },
            ]}
            title="Contatos"
          />
        </div>
      </div>

      <div className="text-white font-roboto text-xs flex flex-col md:flex-row md:justify-between border-t border-[#D2D2D2CC] pt-5 text-center gap-5 lg:w-2/3 lg:mx-auto md:mt-auto">
        <p>© Copyright Skymedia 2023 Todos os direios reservados</p>
        <div className="capitalize flex flex-col md:flex-row gap-2 md:divide-x">
          <a className="underline underline-offset-8 md:no-underline">
            termos de uso
          </a>
          <a className="md:pl-2">Política de privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
