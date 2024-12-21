import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import FaqArea from "@/components/containers/FaqArea";
import Contact from "@/components/containers/home/Contact";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="FAQ" />
      <FaqArea />
      <Contact addClass={true} />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
