import Link from "next/link";
import Image from "next/image";
import banner from "@/public/img/banner/banner.png";

const Banner = () => {
  return (
    <div className="banner__one">
      <div className="container">
        <div className="row ai-center">
          <div className="col-xl-5 col-lg-6">
            <div className="banner__one-content">
              <h1
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Plumbing pros you Best Quality <span>work</span>
              </h1>
              <p
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Plumbers provide essential services to install, repair, and
                maint plumbing systems in residential
              </p>
              <div
                className="banner__one-content-button"
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <Link className="button-2" href="about">
                  Discover More<i className="fa-regular fa-angle-right"></i>
                </Link>
                <div className="video">
                  <Link
                    className="video-popup"
                    href="https://www.youtube.com/watch?v=0WC-tD-njcA"
                  >
                    <i className="fas fa-play"></i>
                    <h5>Play Now</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div
              className="banner__one-image "
              data-aos-duration="800"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <Image src={banner} alt="banner" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
