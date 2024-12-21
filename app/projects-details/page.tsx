import Header from "@/components/layout/header/Header";
import BreadCrumb from "@/components/layout/banner/BreadCrumb";
import ProjectDetails from "@/components/containers/project/ProjectDetails";
import SubscribeArea from "@/components/containers/home-two/SubscribeArea";
import Footer from "@/components/layout/footer/Footer";

const page = () => {
  return (
    <>
      <Header />
      <BreadCrumb title="Project Details" />
      <ProjectDetails />
      <SubscribeArea />
      <Footer />
    </>
  );
};

export default page;
