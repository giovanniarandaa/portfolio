"use client";
import Logo from "@/components/Logo";
import CustomLink from "@/components/CustomLink";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";
import SocialLink from "@/components/SocialLink";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Inicio" className="mr-4" />
        <CustomLink href="/sobre-mi" title="Sobre mi" className="mx-4" />
        <CustomLink href="/projects" title="Proyectos" className="mx-4" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <nav className="flex items-center justify-center flex-wrap">
        <SocialLink href="https://x.com/GiovanniAranda9">
          <TwitterIcon />
        </SocialLink>
        <SocialLink href="https://github.com/giovanniarandaa">
          <GithubIcon />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/giovanni-arandaa/">
          <LinkedInIcon />
        </SocialLink>
      </nav>
    </header>
  );
};
export default Navbar;
