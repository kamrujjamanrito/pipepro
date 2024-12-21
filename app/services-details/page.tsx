import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ServiceDetails from "@/components/containers/service/ServiceDetails";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Service Details" />
      <ServiceDetails />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
