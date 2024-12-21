import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import BlogDetails from "@/components/containers/blog/BlogDetails";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Blog Details" />
      <BlogDetails />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
