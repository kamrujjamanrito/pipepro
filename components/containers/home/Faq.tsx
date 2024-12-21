import Image from "next/image";
import faq from "@/public/img/pages/faq.jpg";

const Faq = () => {
  return (
    <div className="faq__two section-padding">
      <div className="container">
        <div className="row ai-center">
          <div
            className="col-lg-5 lg-mb-30 "
            data-aos-duration="800"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="faq__two-image">
              <Image src={faq} alt="image" priority />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="faq__two-right">
              <div className="faq__two-right-title">
                <h2
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Ask Question
                </h2>
                <p
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Plumbers provide essential services to install, repair, and
                  maintain plumbing systems in residential and commercial
                  properties. They work on pipes, fixtures
                </p>
              </div>
              <div
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="900"
                id="accordionExample"
              >
                <div className="faq__area-item">
                  <h5
                    className="icon"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <span>01</span>How often Plumb Professionals?
                  </h5>
                  <div
                    id="collapseOne"
                    className="faq__area-item-body collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      Plumbers provide essential services to install repair and
                      plumbing systems in residential and commercial properties
                    </p>
                  </div>
                </div>
                <div className="faq__area-item">
                  <h5
                    className="icon collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    <span>02</span>What should I do in case of a plumbing?
                  </h5>
                  <div
                    id="collapseTwo"
                    className="faq__area-item-body collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      Plumbers provide essential services to install repair and
                      plumbing systems in residential and commercial properties
                    </p>
                  </div>
                </div>
                <div className="faq__area-item">
                  <h5
                    className="icon collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    <span>03</span>What is the best way hardwood floors ?
                  </h5>
                  <div
                    id="collapseThree"
                    className="faq__area-item-body collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      Plumbers provide essential services to install repair and
                      plumbing systems in residential and commercial properties
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
