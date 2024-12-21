import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ServiceArea from "@/components/containers/service/ServiceArea";
import Contact from "@/components/containers/home/Contact";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Our Services" />
      <ServiceArea />
      <Contact addClass={true} />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
