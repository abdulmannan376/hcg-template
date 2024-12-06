import React, { useContext } from "react";
import Footer from "./Footer";
import { LanguageContext } from "../context/LanguageContext";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const MainContent = () => {
  const { lang } = useParams();
  const { translations } = useContext(LanguageContext);
  return (
    <>
      <Navbar showBlackBg={true} />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <header>
            <div className="headefr-fexid" data-dsn-header="project">
              <div
                className="bg w-100"
                id="dsn-hero-parallax-img"
                data-dsn-ajax="img"
              >
                <div
                  className="bg-image cover-bg"
                  data-overlay="4"
                  data-image-src="/assets/img/project/project5/1.png"
                ></div>
              </div>

              <div className="scroll" data-dsn-animate="ajax">
                <span className="background"></span>
                <span className="triangle"></span>
              </div>
              <div className="project-title" id="dsn-hero-parallax-title">
                <div className="title-text-header">
                  <div className="cat">
                    <span className="manrope-400">
                      {translations.home?.section1?.subHeading}
                    </span>
                  </div>
                  <span className="title-text-header-inner">
                    <span className="dmsans-600" data-dsn-animate="ajax">
                      {translations.home?.section1?.heading}
                    </span>
                  </span>
                </div>

                <div className="sub-text-header" data-dsn-animate="ajax">
                  {/* <h5 style={{ marginTop: "10px", marginBottom: "10px" }}>
                  The hospitality, serviced apartment, and co-living sectors are
                  constantly evolving, requiring continuous adaptation and
                  innovative solutions.
                </h5>

                <h5 style={{ marginTop: "10px", marginBottom: "10px" }}>
                  We offer tailor-made consulting and management services to
                  successfully realise your hotel, serviced apartment, and
                  co-living property projects.
                </h5> */}

                  <span
                    className="dmsans-600"
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  >
                    {translations.home?.section1?.text}
                  </span>
                </div>
              </div>

              <div className="project-page__inner" >
                <div className="h-100">
                  <div className="row justify-content-center align-items-end h-100">
                    <div
                      id="descover-holder"
                      className="col-lg-12 project-meta__content"
                      // style={{ transform: "translate3d(0px, 0px, 10px)" }}
                    >
                      <div className="link">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`/${lang}/project-volta`}
                        >
                          Project Volta
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="wrapper">
            <div className="root-project">
              <div
                className="container intro-project section-top"
                // data-dsn="color"
              >
                <div className="intro-text">
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
                    <h2 data-dsn-animate="text">
                      {translations.home?.section2?.heading}
                    </h2>
                    <p
                      className="dmsans-500"
                      data-dsn-animate="up"
                      style={{   }}
                    >
                      {translations.home?.section2?.text}
                    </p>
                    {/* <a
                    className="bottom-link"
                    data-dsn-animate="up"
                    href="https://www.behance.net/gallery/69632537/Novara-Conic"
                    target="_blank"
                    rel="noreferrer"
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

              {/* <div className="container project-image-collage section-margin">
                <img src="/assets/img/project/project5/2.jpg" alt="" />
                <img src="/assets/img/project/project5/3.jpg" alt="" />
                <img src="/assets/img/project/project5/4.jpg" alt="" />
                <img src="/assets/img/project/project5/1.jpg" alt="" />
              </div> */}

              <section
                className="our-services"
                style={{ paddingTop: "40px" }}
              >
                <div className="container">
                  <div
                    className="one-title"
                    data-dsn-animate="up"
                    style={{ width: "100%", padding: "20px 0px" }}
                  >
                    <h2 className="title-main" style={{ margin: "20px 0px" }}>
                      {translations?.home?.section11?.heading}
                    </h2>
                    <p style={{   }}>
                    {translations?.home?.section11?.subHeading}
                    </p>
                  </div>
                </div>
              </section>
              <div
                className=" box-gallery-vertical section-margin section-padding"
                // data-dsn="color"
              >
                <div className="mask-bg" style={{backgroundColor: "#233F3F"}}></div>
                <div className="container">
                  <div className="row align-items-center h-100">
                    <div className="col-lg-6 ">
                      <div className="box-im" data-dsn-grid="move-up">
                        <img
                          className="has-top-bottom"
                          src="/assets/img/project/project5/5-1.png"
                          alt=""
                          data-dsn-move="20%"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="box-info left-line">
                        <div className="vertical-title">
                          <h2 data-dsn-animate="up" style={{ color: "#fff" }}>
                            {translations.home?.section3?.heading}
                          </h2>
                        </div>

                        <h6
                          data-dsn-animate="up"
                          style={{ color: "#fff" }}
                        >
                          {translations.home?.section3?.subHeading}
                        </h6>

                        <h6
                          data-dsn-animate="up"
                          style={{
                            fontSize: "15px",
                            fontWeight: "500",
                            color: "#fff",
                          }}
                        >
                          {translations.home?.section3?.text}
                        </h6>

                        {/* <div className="link-custom" data-dsn-animate="up">
                        <a className="image-zoom" href="#" data-dsn="parallax">
                          <span>Learn More</span>
                        </a>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section
                className="our-services section-margin"
                style={{ paddingTop: "40px" }}
              >
                <div className="container">
                  <div
                    className="one-title"
                    data-dsn-animate="up"
                    style={{ width: "100%" }}
                  >
                    {/* <div className="title-sub-container">
                      <p className="title-sub">
                        {translations.home?.section7?.subHeading}
                      </p>
                    </div> */}
                    <h2 className="title-main">
                      {translations.home?.section7?.heading}
                    </h2>
                  </div>

                  <div className="row">
                    {translations.home?.section7?.cards?.map((card, index) => (
                      <div key={index} className="col-md-6">
                        <div className="services-item">
                          <div className="line-before"></div>
                          <p style={{   }}>{card.heading}</p>
                          {/* <p style={{   }}>{card.text}</p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="one-title"
                    data-dsn-animate="up"
                    style={{ width: "100%", padding: "20px 0px" }}
                  >
                    <h2 className="title-main" style={{ margin: "20px 0px" }}>
                      {translations.home?.section8?.heading}
                    </h2>

                    <p style={{   }}>
                      {translations.home?.section8?.subHeading}
                    </p>
                  </div>
                </div>
              </section>
              {/* <div
              className=" box-gallery-vertical section-margin section-padding"
              data-dsn="color"
            >
              <div className="mask-bg"></div>
              <div className="container">
                <div className="row align-items-center h-100">
                  <div className="col-lg-6">
                    <div
                      className="box-info right-line"
                      style={{
                        paddingRight: "50px",
                        paddingLeft: "0px",
                        textAlign: "right",
                      }}
                    >
                      <div className="vertical-title">
                        <h2 data-dsn-animate="up">Operators & Hoteliers.</h2>
                      </div>

                      <h6 data-dsn-animate="up">
                        The hotel, serviced apartment, and co-living sectors
                        face a wide range of complex and constantly changing
                        challenges that need to be addressed.
                      </h6>

                      <p data-dsn-animate="up">
                        From the increasing competition from online platforms to
                        the impact of the global pandemic and the rapidly
                        evolving digital landscape, we analyse current trends
                        and developments to help you find solutions and thrive
                        in this highly dynamic industry.
                      </p>

                      <div className="link-custom" data-dsn-animate="up">
                        <a className="image-zoom" href="#" data-dsn="parallax">
                          <span>Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="box-im" data-dsn-grid="move-up">
                      <img
                        className="has-top-bottom"
                        src="/assets/img/project/project5/5.jpg"
                        alt=""
                        data-dsn-move="20%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

              <div
                className=" box-gallery-vertical section-margin section-padding"
                // data-dsn="color"
                style={{   }}
              >
                <div className="mask-bg"></div>
                <div className="container">
                  <div className="row align-items-center h-100">
                    <div className="col-lg-6 ">
                      <div className="box-im" data-dsn-grid="move-up">
                        <img
                          className="has-top-bottom"
                          src="/assets/img/project/project5/5-2.png"
                          alt=""
                          data-dsn-move="20%"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="box-info left-line">
                        <div className="vertical-title">
                          <h2 data-dsn-animate="up" style={{ color: "#fff" }}>
                            {translations.home?.section4?.heading}
                          </h2>
                        </div>

                        <h6 data-dsn-animate="up" style={{ color: "#fff" }}>
                          {translations.home?.section4?.subHeading}
                        </h6>

                        <h6
                          data-dsn-animate="up"
                          style={{
                            fontSize: "15px",
                            fontWeight: "500",
                            color: "#fff",
                          }}
                        >
                          {translations.home?.section4?.text}
                        </h6>

                        {/* <div className="link-custom" data-dsn-animate="up">
                        <a className="image-zoom" href="#" data-dsn="parallax">
                          <span>Learn More</span>
                        </a>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section
                className="our-services"
                // style={{ paddingTop: "40px" }}
              >
                <div className="container">
                  <div
                    className="one-title"
                    data-dsn-animate="up"
                    style={{
                      width: "100%",
                      padding: "20px 0px",
                    }}
                  >
                    <h2 className="title-main" style={{ margin: "20px 0px" }}>
                      {translations?.home?.section12?.heading}
                    </h2>
                    <p style={{  }}>
                    {translations?.home?.section12?.paragraphs[0]}
                    </p>
                    <p style={{  }}>
                    {translations?.home?.section12?.paragraphs[1]}

                    </p>
                  </div>
                </div>
              </section>
              <div
                className="box-gallery-vertical section-margin section-padding"
                // data-dsn="color"
              >
                <div className="mask-bg"></div>
                <div className="container">
                  <div className="row align-items-center h-100">
                    <div className="col-lg-6 ">
                      <div className="box-im" data-dsn-grid="move-up">
                        <img
                          className="has-top-bottom"
                          src="/assets/img/project/project5/3.png"
                          alt=""
                          data-dsn-move="20%"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="box-info left-line">
                        <div className="vertical-title">
                          <h2 data-dsn-animate="up" style={{ color: "#fff" }}>
                            {translations.home?.section5?.heading}
                          </h2>
                        </div>

                        <h6
                          data-dsn-animate="up"
                          style={{ color: "#fff" }}
                        >
                          {translations.home?.section5?.subHeading}
                        </h6>

                        <h6
                          data-dsn-animate="up"
                          style={{
                            fontSize: "15px",
                            fontWeight: "500",
                            color: "#fff",
                          }}
                        >
                          {translations.home?.section5?.text}
                        </h6>

                        {/* <div className="link-custom" data-dsn-animate="up">
                        <a className="image-zoom" href="#" data-dsn="parallax">
                          <span>Learn More</span>
                        </a>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section
                className="our-services section-margin"
                // style={{ paddingTop: "40px" }}
              >
                <div className="container">
                  <div
                    className="one-title"
                    data-dsn-animate="up"
                    style={{ width: "100%" }}
                  >
                    {/* <div className="title-sub-container">
                      <p className="title-sub">
                        {translations.home?.section7?.subHeading}
                      </p>
                    </div> */}
                    <h2 className="title-main">
                      {translations.home?.section9?.heading}
                    </h2>
                  </div>

                  <div className="row">
                    {translations.home?.section9?.cards?.map((card, index) => (
                      <div key={index} className="col-md-6">
                        <div className="services-item">
                          <div className="line-before"></div>
                          <p style={{   }}>{card.heading}</p>
                          {/* <p style={{   }}>{card.text}</p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="one-title"
                    data-dsn-animate="up"
                    style={{ width: "100%", padding: "20px 0px" }}
                  >
                    <h2 className="title-main" style={{ margin: "20px 0px" }}>
                      {translations.home?.section10?.heading}
                    </h2>
                    <p style={{   }}>
                      {translations.home?.section10?.subHeading}
                    </p>
                  </div>
                </div>
              </section>
              {/* <div className="container-fluid section-margin">
                <div
                  className="img-box-small dsn-parallax-full"
                  data-dsn-grid="move-up"
                >
                  <img
                    src="/assets/img/project/project5/6.png"
                    alt=""
                    data-dsn-y="30%"
                    data-dsn-scale="1"
                  />
                  <div className="cap">
                  <span>Web Design</span>
                </div> 
                </div>
              </div> */}
            </div>

            <div className="next-project" data-dsn-footer="project">
              <div id="dsn-next-parallax-img" className="bg">
                <div
                  className="bg-image cover-bg"
                  data-overlay="2"
                  data-image-src="/assets/img/project/project5/7.png"
                ></div>
              </div>

              <div id="dsn-next-parallax-title" className="project-title">
                <a
                  href={`/${lang}/hamburg-hammerbrook`}
                  className=""
                  data-dsn-ajax="next-project"
                >
                  <div className="title-text-header">
                    <div className="title-text-header-inner">
                      <span>{translations.project2?.section1?.heading}</span>
                    </div>
                  </div>
                  <div className="sub-text-header">
                    <h5>{translations.home?.section6?.subHeading}</h5>
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

export default MainContent;
