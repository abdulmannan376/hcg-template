import React, { useContext } from "react";
import Footer from "../Footer";
import Preloader from "../Preloader";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

const ARCOTELCaminoStuttgart = () => {
  const { lang } = useParams();
  const {translations} = useContext(LanguageContext)
  return (
    <>
      {/* <Preloader/> */}
      <Navbar showBlackBg={false} />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <header>
            <div className="headefr-fexid" data-dsn-header="project">
              <div
                className="bg"
                id="dsn-hero-parallax-img"
                data-dsn-ajax="img"
              >
                <div
                  className="bg-image  cover-bg"
                  data-overlay="0"
                  data-image-src="/assets/img/services/section-8/1.webp"
                ></div>
              </div>

              <div className="scroll" data-dsn-animate="ajax">
                <span className="background"></span>
                <span className="triangle"></span>
              </div>
              <div className="project-title" id="dsn-hero-parallax-title">
                <div className="title-text-header">
                  <div className="cat">
                    <span>{translations?.project8?.section1?.subHeading}</span>
                  </div>
                  <span className="title-text-header-inner">
                    <span data-dsn-animate="ajax">
                      {translations?.project8?.section1?.heading}
                    </span>
                  </span>
                </div>
                {/* <div className="sub-text-header" data-dsn-animate="ajax">
                <h5>Seohee Lee</h5>
                <span>- September 26th 2017</span>
              </div> */}
              </div>

              {/* <div className="project-page__inner">
              <div className="h-100">
                <div className="row justify-content-center align-items-end h-100">
                  <div
                    id="descover-holder"
                    className="col-lg-12 project-meta__content"
                  >
                    <div className="link">
                      <a
                        target="_blank"
                        href="https://www.behance.net/gallery/57136617/Time-Tag_Watch?tracking_source=search%7Cwatch%20"
                      >
                        View Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </header>

          <div className="wrapper">
            <div className="root-project">
              <div className="container intro-project section-margin">
                <div className="intro-text text-center">
                  <div
                    className="title-cover"
                    data-dsn-grid="move-section"
                    data-dsn-opacity="0.1"
                    data-dsn-duration="170%"
                    data-dsn-move="0%"
                  >
                    &nbsp;
                  </div>
                  <div className="inner">
                    <h2 data-dsn-animate="text">{translations?.project8?.section2?.heading}</h2>
                    <p data-dsn-animate="up">
                      {translations?.project8?.section2?.text}
                    </p>

                    {/* <a
                      className="bottom-link"
                      data-dsn-animate="up"
                      href="https://www.behance.net/gallery/57136617/Time-Tag_Watch?tracking_source=search%7Cwatch%20"
                      target="_blank"
                    >
                      <span></span>
                      <span></span>
                      <div className="content">
                        <div className="inner">
                          <p>VISIT SITE</p>
                        </div>
                      </div>
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="container-fluid gallery-col">
                <div className="row">
                  <div className="col-md-4 box-im section-padding">
                    <div className="image-zoom" data-dsn="parallax">
                      <a
                        className="single-image"
                        href="/assets/img/services/section-8/2.webp"
                      >
                        <img
                          src="/assets/img/services/section-8/2.webp"
                          alt=""
                        />
                      </a>

                      {/* <div className="caption">Trevor Bittinger</div> */}
                    </div>
                  </div>

                  <div className="col-md-4 box-im section-padding">
                    <div className="image-zoom" data-dsn="parallax">
                      <a
                        className="single-image"
                        href="/assets/img/services/section-8/3.webp"
                      >
                        <img
                          src="/assets/img/services/section-8/3.webp"
                          alt=""
                        />
                      </a>
                      {/* <div className="caption">Sef McCullough</div> */}
                    </div>
                  </div>

                  <div className="col-md-4 box-im section-padding">
                    <div className="image-zoom" data-dsn="parallax">
                      <a
                        className="single-image"
                        href="/assets/img/services/section-8/4.webp"
                      >
                        <img
                          src="/assets/img/services/section-8/4.webp"
                          alt=""
                        />
                      </a>
                      {/* <div className="caption">Sef McCullough</div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className=" box-gallery-vertical section-margin section-padding">
                <div className="mask-bg"></div>
                <div className="container">
                  <div className="row align-items-center h-100">
                    <div className="col-lg-6 ">
                      <div className="box-im" data-dsn-grid="move-up">
                        <img
                          className="has-top-bottom"
                          src="assets/img/project/project9/5.jpg"
                          alt=""
                          data-dsn-move="20%"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="box-info">
                        <div className="vertical-title">
                          <h2 data-dsn-animate="up">IT STARTS WITH US.</h2>
                        </div>

                        <h6 data-dsn-animate="up">
                          We set THE blue and gold standard, emblazoned it with
                          a bear, and held it high. Then we watched our passion
                          spread across the state.
                        </h6>

                        <p data-dsn-animate="up">
                          Challenging the status quo, driving forward, never
                          backing down. The future of intelligence. The future
                          of excellence. The future of defiance, innovation, and
                          sport. This is where it all begins.
                        </p>

                        <div className="link-custom" data-dsn-animate="up">
                          <a
                            className="image-zoom"
                            href="#"
                            data-dsn="parallax"
                          >
                            <span>Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="box-seat">
                <div className="dsn-v-text">
                  <div className="container-fluid">
                    <div className="box-middle-text">
                      <a href="https://vimeo.com/175353205" className="vid">
                        <div className="play-button">
                          <div className="play-btn">
                            <i className="fas fa-play"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="inner-img" data-dsn-grid="move-up">
                      <img
                        className="has-top-bottom"
                        src="assets/img/project/project9/7.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="box-seat section-margin">
                <div className="container-fluid">
                  <div className="inner-img" data-dsn-grid="move-up">
                    <img src="assets/img/project/project9/13.jpg" alt="" />
                  </div>
                  <div className="pro-text" data-dsn-grid="move-section">
                    <h3 data-dsn-animate="text">
                      Take a seat <br /> at a table on the ground floor
                    </h3>
                    <p data-dsn-animate="text">
                      Not quite a cafe, not quite a restaurant, we offer
                      innovative fare for breakfast, lunch and dinner, alongside
                      specialty coffee and a wine list featuring varietals
                      ranging from South Africa to Spain...
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="gallery-portfolio section-margin">
                <a
                  className="link-pop"
                  href="assets/img/project/project9/6.jpg"
                  data-source="assets/img/project/project9/6.jpg"
                >
                  <img src="assets/img/project/project9/6.jpg" alt="" />
                  <div className="cap">
                    <span>Web Design</span>
                  </div>
                </a>

                <a
                  className="link-pop"
                  href="assets/img/project/project9/8.jpg"
                  data-source="assets/img/project/project9/8.jpg"
                >
                  <img src="assets/img/project/project9/8.jpg" alt="" />
                  <div className="cap">
                    <span>Web Design</span>
                  </div>
                </a>

                <a
                  className="link-pop"
                  href="assets/img/project/project9/9.jpg"
                  data-source="assets/img/project/project9/9.jpg"
                >
                  <img src="assets/img/project/project9/9.jpg" alt="" />
                  <div className="cap">
                    <span>Web Design</span>
                  </div>
                </a>

                <a
                  className="link-pop"
                  href="assets/img/project/project9/10.jpg"
                  data-source="assets/img/project/project9/10.jpg"
                >
                  <img src="assets/img/project/project9/10.jpg" alt="" />
                  <div className="cap">
                    <span>Web Design</span>
                  </div>
                </a>

                <a
                  className="link-pop"
                  href="assets/img/project/project9/11.jpg"
                  data-source="assets/img/project/project9/11.jpg"
                >
                  <img src="assets/img/project/project9/11.jpg" alt="" />
                  <div className="cap">
                    <span>Web Design</span>
                  </div>
                </a>

                <a
                  className="link-pop"
                  href="assets/img/project/project9/12.jpg"
                  data-source="assets/img/project/project9/12.jpg"
                >
                  <img src="assets/img/project/project9/12.jpg" alt="" />
                  <div className="cap">
                    <span>Web Design</span>
                  </div>
                </a>
              </div> */}
            </div>

            <div className="next-project" data-dsn-footer="project">
              <div id="dsn-next-parallax-img" className="bg">
                <div
                  className="bg-image cover-bg"
                  data-overlay="4"
                  data-image-src="/assets/img/services/section-9/1.webp"
                ></div>
              </div>

              <div id="dsn-next-parallax-title" className="project-title">
                <a
                  href={`/${lang}/arcotel-kaiserwasser-vienna`}
                  className=""
                  data-dsn-ajax="next-project"
                >
                  <div className="title-text-header">
                    <div className="title-text-header-inner">
                      <span>{translations?.project8?.section3?.heading}</span>
                    </div>
                  </div>
                  <div className="sub-text-header">
                    <h5>{translations?.project8?.section3?.subHeading}</h5>
                  </div>
                </a>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default ARCOTELCaminoStuttgart;
