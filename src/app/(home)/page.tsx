import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Template from "@/components/Template";
import HireMe from "@/components/HireMe";

const Home = () => {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Template className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src="/images/profile/developer-pic-1.png"
              alt="CodeBucks"
              className="w-full h-auto"
              width={580}
              height={580}
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Giovanni Aranda"
              className="text-6xl text-left"
            />
            <p className="my-4 text-base font-medium">
              Tengo 28 años y soy desarrollador Full Stack con una gran
              experiencia en desarrollo de sitios web. He trabajado a distancia
              para agencias, como desarrollador para startups, y he colaborado
              con personas talentosas para crear productos digitales para uso
              comercial. Tengo una curiosidad sobre todo y trabajo constante
              para mejorar mis habilidades.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/Giovanni-Aranda.pdf"
                target="_blank"
                download
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              >
                Curriculum Vitae
                <LinkArrow className="!w-6 ml-1" />
              </Link>
              <Link
                href="mailto:giovanni.arandaa@gmail.com"
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                Contáctame
              </Link>
            </div>
          </div>
        </div>
      </Template>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image
          src="/images/svgs/miscellaneous_icons_1.svg"
          alt="Giovanni Aranda"
          className="w-full h-auto"
          width="38"
          height="65"
        />
      </div>
    </main>
  );
};
export default Home;
