import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ContactArea from "@/components/containers/ContactArea";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Contact Us" />
      <ContactArea />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
