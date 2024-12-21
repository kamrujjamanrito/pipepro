import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ErrorArea from "@/components/containers/ErrorArea";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="404 Error" />
      <ErrorArea />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
