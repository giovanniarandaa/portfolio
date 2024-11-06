import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`bg-light w-full min-h-screen`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default HomeLayout;
