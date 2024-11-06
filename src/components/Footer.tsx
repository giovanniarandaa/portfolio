import Template from "@/components/Template";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Template className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()}</span>
        <div className="flex items-center">
          Construido con{" "}
          <span className="text-primary text-2xl px-1">&#9825;</span> por&nbsp;
          <Link href="/">Giovanni Aranda</Link>
        </div>

        <p>Diseñado por CodeBucks</p>
      </Template>
    </footer>
  );
};
export default Footer;
