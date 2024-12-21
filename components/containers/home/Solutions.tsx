import Link from "next/link";
import Counter from "../Counter";

const Solutions = ({addClass = false}) => {
  
  return (
    <div className={(addClass ? " section-padding " : " section-padding pt-0") + " solutions__area"}>
      <div className="container">
        <div className="row ai-center">
          <div
            className="col-lg-8 lg-mb-30 "
            data-aos-duration="800"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="solutions__area-left">
              <h2>Your Plumbing Solutions Our Expertise</h2>
              <p>
                Plumbers provide essential services to install, repair, and
                maint plumbing systems in residential and commercial properties.
                They work on pipes, fixtures, water heaters, and drainage
                systems
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 "
            data-aos-duration="800"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="solutions__area-right">
              <h2>
                <span className="counter">
                  <Counter value={25} />
                </span>
                <span className="pre">+</span>
              </h2>
              <h5>Services we provide</h5>
            </div>
          </div>
        </div>
        <div className="row mb-60">
          <div
            className="col-lg-3 col-sm-6 mt-35 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="counter__two-item">
              <h2>
                <span className="counter">
                  <Counter value={150} />
                </span>
                <span className="pre">+</span>
              </h2>
              <span>Team member</span>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 mt-35 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="counter__two-item">
              <h2>
                <span className="counter">
                  <Counter value={100} />
                </span>
                <span className="pre">+</span>
              </h2>
              <span>Winning award</span>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 mt-35 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="counter__two-item">
              <h2>
                <span className="counter">
                  <Counter value={700} />
                </span>
                <span className="pre">+</span>
              </h2>
              <span>Complete project</span>
            </div>
          </div>
          <div
            className="col-lg-3 col-sm-6 mt-35 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="counter__two-item">
              <h2>
                <span className="counter">
                  <Counter value={685} />
                </span>
                <span className="pre">+</span>
              </h2>
              <span>Client review</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-12 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="video__area">
              <div className="video">
                <Link
                  className="video-popup"
                  href="https://www.youtube.com/watch?v=0WC-tD-njcA"
                >
                  <i className="fas fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
