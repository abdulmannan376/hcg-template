import React, { useContext } from "react";
import Footer from "./Footer";
import { LanguageContext } from "../context/LanguageContext";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Services = () => {
  const { translations } = useContext(LanguageContext);
  const { lang } = useParams();
  return (
    <>
      <Navbar showBlackBg={true} />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <header>
            <div className="container header-hero">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contenet-hero" style={{ paddingBottom: "30px"}}>
                    <h5>{translations?.services?.subHeading}</h5>
                    <h1>{translations?.services?.heading}</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="wrapper">
            <div className="root-work">
              <div className="container">
                <section className="our-services">
                  <div className="container">
                    <div
                      className="one-title"
                      data-dsn-animate="up"
                      style={{ width: "100%", padding: "20px 0px" }}
                    >
                      <h2 className="title-main" style={{ margin: "20px 0px" }}>
                        {translations?.services?.section1?.heading}
                      </h2>
                      <p style={{ textAlign: "justify" }}>
                      {translations?.services?.section1?.subHeading}
                      </p>
                    </div>
                  </div>
                </section>

                <div className="box-title" data-dsn-title="cover">
                  <h2
                    className="title-cover"
                    data-dsn-grid="move-section"
                    data-dsn-move="-70"
                  >
                    {translations?.services?.text}
                  </h2>
                </div>

                <div className="filterings">
                  <div className="filtering-wrap">
                    <div id="filteringP" className="filtering">
                      <div className="selector"></div>
                      <button type="button" data-filter="*" className="active">
                        {translations?.services?.tabs[0]}
                      </button>
                      <button type="button" data-filter=".co-living">
                        {translations?.services?.tabs[1]}
                      </button>
                      <button type="button" data-filter=".hotel">
                        {translations?.services?.tabs[2]}
                      </button>
                      {/* <button type="button" data-filter=".architecture">
                      Architecture
                    </button>
                    <button type="button" data-filter=".video">
                      video
                    </button> */}
                    </div>
                  </div>
                </div>

                <div
                  id="galleryP"
                  className="projects-list projects gallery"
                  // style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <div className="item co-living">
                    <a
                      href={`/${lang}/project-volta`}
                      className=""
                      data-dsn-ajax="work"
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-1/4.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project1?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project1?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project1?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item co-living">
                    <a
                      href={`/${lang}/hamburg-hammerbrook`}
                      className=""
                      data-dsn-ajax="work"
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-2/4.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project2?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project2?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project2?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item hotel">
                    <a href={`/${lang}/linz-leonding`} data-dsn-grid="move-up">
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-3/4.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project3?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project3?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project3?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* <div className="item video">
                  <a href="project-8.html">
                    <img
                      className="hidden"
                      src="/assets/img/project/project8/1.jpg"
                      alt=""
                    />
                    <div
                      data-dsn="video"
                      data-overlay="4"
                      style={{ height: "80vh" }}
                    >
                      <video
                        className="has-top-bottom dsn-video"
                        preload="none"
                        poster="/assets/img/project/project8/1.jpg"
                        autoPlay
                        playsInline
                        loop
                        muted
                        onCanPlay={(e) => {
                          e.currentTarget.play();
                        }}
                      >
                        <source
                          src="http://theme.dsngrid.com/video/droow.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="http://theme.dsngrid.com/video/droow.webm"
                          type="video/webm"
                        />
                        Your browser does not support HTML5 video.
                      </video>
                    </div>
                    <div className="item-border"></div>
                    <div className="item-info">
                      <h5 className="cat">video</h5>
                      <h4>Toast 2019 Reel</h4>
                      <span>
                        <span>View Project</span>
                      </span>
                    </div>
                  </a>
                </div> */}

                  <div className="item co-living">
                    <a href={`/${lang}/hamburg-altona`} data-dsn-grid="move-up">
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-4/4.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project4?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project4?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project4?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item hotel">
                    <a
                      href={`/${lang}/croatia-omis-ruskamen`}
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-5/4.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project5?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project5?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project5?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item co-living">
                    <a
                      href={`/${lang}/ilive-rioca-vienna`}
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-6/1.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project6?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project6?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project6?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item hotel">
                    <a
                      href={`/${lang}/excelsior-pyramid-fürth`}
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-7/4.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project7?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project7?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project7?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item hotel">
                    <a
                      href={`/${lang}/arcotel-camino-stuttgart`}
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-8/4.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project8?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project8?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project8?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item hotel">
                    <a
                      href={`/${lang}/arcotel-kaiserwasser-vienna`}
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-9/4.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">Hotel</h5>
                        <h4>{translations?.services?.project9?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project9?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item hotel">
                    <a
                      href={`/${lang}/arcotel-allergra-zagreb`}
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-10/2.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project10?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project10?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project10?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item hotel">
                    <a
                      href={`/${lang}/arcotel-onyx-hamburg`}
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-11/4.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project11?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project11?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project11?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="item hotel">
                    <a
                      href={`/${lang}/arcotel-rubin-hamburg`}
                      data-dsn-grid="move-up"
                    >
                      <img
                        className="has-top-bottom"
                        src="/assets/img/services/section-12/3.webp"
                        alt=""
                      />
                      <div className="item-border"></div>
                      <div className="item-info">
                        <h5 className="cat">
                          {translations?.services?.project12?.subHeading}
                        </h5>
                        <h4>{translations?.services?.project12?.heading}</h4>
                        <span>
                          <span>{translations?.services?.project12?.text}</span>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <section className="contact-up section-margin section-padding">
            <div className="container">
              <div className="c-wapp">
                <a href="contact.html" className="effect-ajax">
                  <span className="hiring">We are hiring</span>
                  <span className="career">
                    Dare and contact us immediately!
                  </span>
                </a>
              </div>
            </div>
          </section> */}
          </div>
          <Footer />
          {/* <footer>
          <div className="info">
            <div className="contact-footer">
              <a
                href="tel:010"
                className="phone image-zoom"
                data-dsn="parallax"
              >
                012.345.6789
              </a>
              <a href="#" className="email image-zoom" data-dsn="parallax">
                info@dsngrid
              </a>
            </div>
            <div className="copyright-social">
              <p>© 2019 Design Grid</p>
              <ul>
                <li className="image-zoom" data-dsn="parallax">
                  <a href="#" target="_blank">
                    Instagram
                  </a>
                </li>
                <li className="image-zoom" data-dsn="parallax">
                  <a href="#" target="_blank">
                    Facebook
                  </a>
                </li>
                <li className="image-zoom" data-dsn="parallax">
                  <a href="#" target="_blank">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer> */}
        </div>
      </main>
    </>
  );
};

export default Services;
