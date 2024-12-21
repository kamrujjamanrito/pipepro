import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import BlogGrid from "@/components/containers/blog/BlogGrid";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Blog Grid" />
      <BlogGrid />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
