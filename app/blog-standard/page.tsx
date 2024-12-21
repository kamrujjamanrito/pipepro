import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import BlogStandard from "@/components/containers/blog/BlogStandard";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Blog Standard" />
      <BlogStandard />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
