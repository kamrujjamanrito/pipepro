import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import TestimonialArea from "@/components/containers/TestimonialArea";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Testimonials" />
      <TestimonialArea />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
