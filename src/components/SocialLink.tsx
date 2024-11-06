import { motion } from "framer-motion";

const SocialLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-6 mx-3"
    >
      {children}
    </motion.a>
  );
};
export default SocialLink;
