import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps extends Pick<LinkProps, "href"> {
  className?: string;
  title: string;
}
const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in duration-300 
        ${pathname === String(href) ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
