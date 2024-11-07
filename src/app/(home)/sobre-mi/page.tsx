import type { Metadata } from "next";
import AnimatedText from "@/components/AnimatedText";
import Template from "@/components/Template";
import Image from "next/image";
import AboutStatsItem from "@/components/AboutStatsItem";

export const metadata: Metadata = {
  title: "Giovanni Aranda | Sobre mi",
};

const SobreMi = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Template className="pt-16">
        <AnimatedText
          text="La pasión alimenta el propósito"
          className="mb-16"
        />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biografía
            </h2>
            <p className="font-medium">
              Tengo 28 años y soy desarrollador Full-Stack con una gran
              experiencia en desarrollo de sitios web. He trabajado a distancia
              para agencias, como desarrollador para startups, y he colaborado
              con personas talentosas para crear productos digitales para uso
              comercial. Tengo una curiosidad sobre todo y trabajo constante
              para mejorar mis habilidades.
            </p>
          </div>

          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
            <Image
              src="/images/profile/developer-pic-2.jpg"
              alt="Giovanni Aranda"
              className="w-full h-auto rounded-2xl"
              width="1920"
              height="2345"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between ">
            <AboutStatsItem title="clientes" quantity={10} />
            <AboutStatsItem title="proyectos completados" quantity={20} />
            <AboutStatsItem title="años de experiencia" quantity={6} />
          </div>
        </div>
      </Template>
    </main>
  );
};
export default SobreMi;
