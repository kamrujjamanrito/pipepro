import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import Projects from "@/components/containers/project/Projects";
import Contact from "@/components/containers/home/Contact";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Our Projects" />
      <Projects />
      <Contact addClass={true} />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
