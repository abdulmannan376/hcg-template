import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { LanguageContext } from "../context/LanguageContext";
import Navbar from "./Navbar";

const About = () => {
  const { translations } = useContext(LanguageContext);

  const [isMobView, setIsMobView] = useState(true);
  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 991) {
      setIsMobView(false);
    }
  }, []);

  return (
    <>
      <Navbar showBlackBg={true} />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <header>
            <div
              className="header-hero header-hero-2 "
              style={{ background: "#edeae2" }}
            >
              <div className="container h-100">
                <div className="row align-items-center h-100">
                  <div className="col-lg-12">
                    <div
                      className="contenet-hero"
                      style={{ paddingBottom: "30px" }}
                    >
                      <h1>{translations.about?.section1?.heading}</h1>
                      <p>{translations.about?.section1?.text}</p>
                      <a
                        href="#section-1"
                        className="view-case scroll-down scroll-to"
                        style={{ fontWeight: "bolder" }}
                      >
                        Scroll Down{" "}
                        <img src="/assets/img/arrow-right-dark.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div id="section-1" className="wrapper">
            <div className="root-about">
              {isMobView ? (
                <section className="box-seat box-seat-full section-margin">
                  <div className="container-fluid">
                    <div
                      className="pro-text left"
                      style={{
                        color: "#fff",
                        backgroundColor: "rgba(35, 63, 63, 0.7)",
                      }}
                    >
                      <h3
                        data-dsn-animate="up"
                        dangerouslySetInnerHTML={{
                          __html: translations.about?.section2?.heading,
                        }}
                        style={{ color: "#fff" }}
                      ></h3>
                      {translations.about?.section2?.paragraphs?.map(
                        (para, pIndex) => (
                          <p
                            key={pIndex}
                            data-dsn-animate="up"
                            style={{ margin: "5px 0px", color: "#fff" }}
                          >
                            {para}
                          </p>
                        )
                      )}
                      <ul style={{ listStyle: "disc" }} data-dsn-animate="up">
                        <p style={{ margin: "5px 0px", color: "#fff" }}>
                          {translations.about?.section2?.details?.heading}
                        </p>
                        {translations.about?.section2?.details?.bullets?.map(
                          (bullet, bIndex) => (
                            <li style={{ marginLeft: "20px" }}>
                              <p
                                key={bIndex}
                                style={{
                                  margin: "5px 0px",
                                  fontSize: "12px",
                                  color: "#fff",
                                }}
                              >
                                {bullet}
                              </p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="inner-img" data-dsn-grid="move-up">
                      <img
                        src="/assets/img/about/1.png"
                        alt=""
                        data-dsn-y="30%"
                        data-dsn-scale="1"
                      />
                    </div>
                  </div>
                </section>
              ) : (
                <section className="box-seat box-seat-full">
                  <div className="container-fluid">
                    <div className="inner-img" data-dsn-grid="move-up">
                      <img
                        src="/assets/img/about/1.png"
                        alt=""
                        data-dsn-y="30%"
                        data-dsn-scale="1"
                      />
                    </div>
                    <div
                      className="pro-text right"
                      style={{
                        color: "#fff",
                        backgroundColor: "rgba(35, 63, 63, 0.7)",
                      }}
                    >
                      <h3
                        data-dsn-animate="up"
                        dangerouslySetInnerHTML={{
                          __html: translations.about?.section2?.heading,
                        }}
                        style={{ color: "#fff" }}
                      ></h3>
                      {translations.about?.section2?.paragraphs?.map(
                        (para, pIndex) => (
                          <p
                            key={pIndex}
                            data-dsn-animate="up"
                            style={{ margin: "5px 0px", color: "#fff" }}
                          >
                            {para}
                          </p>
                        )
                      )}
                      <ul style={{ listStyle: "disc" }} data-dsn-animate="up">
                        <p style={{ margin: "5px 0px", color: "#fff" }}>
                          {translations.about?.section2?.details?.heading}
                        </p>
                        {translations.about?.section2?.details?.bullets?.map(
                          (bullet, bIndex) => (
                            <li style={{ marginLeft: "20px" }}>
                              <p
                                key={bIndex}
                                style={{
                                  margin: "5px 0px",
                                  fontSize: "12px",
                                  color: "#fff",
                                }}
                              >
                                {bullet}
                              </p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </section>
              )}

              <section className="box-seat box-seat-full section-margin">
                <div className="container-fluid">
                  <div
                    className="pro-text left"
                    style={{
                      color: "#fff",
                      backgroundColor: "rgba(35, 63, 63, 0.7)",
                    }}
                  >
                    <h3
                      data-dsn-animate="up"
                      dangerouslySetInnerHTML={{
                        __html: translations.about?.section3?.heading,
                      }}
                      style={{ color: "#fff" }}
                    ></h3>
                    {translations.about?.section3?.paragraphs?.map(
                      (para, pIndex) => (
                        <p
                          key={pIndex}
                          data-dsn-animate="up"
                          style={{ margin: "5px 0px", color: "#fff" }}
                        >
                          {para}
                        </p>
                      )
                    )}
                  </div>
                  <div className="inner-img" data-dsn-grid="move-up">
                    <img
                      src="/assets/img/about/2.png"
                      alt=""
                      data-dsn-y="30%"
                      data-dsn-scale="1"
                    />
                  </div>
                </div>
              </section>

              {isMobView ? (
                <section className="box-seat box-seat-full section-margin">
                  <div className="container-fluid">
                    <div
                      className="pro-text left"
                      style={{
                        color: "#fff",
                        backgroundColor: "rgba(35, 63, 63, 0.7)",
                      }}
                    >
                      <h3
                        data-dsn-animate="up"
                        dangerouslySetInnerHTML={{
                          __html: translations.about?.section8?.heading,
                        }}
                        style={{ color: "#fff" }}
                      ></h3>
                      {translations.about?.section8?.paragraphs?.map(
                        (para, pIndex) => (
                          <p
                            key={pIndex}
                            data-dsn-animate="up"
                            style={{ margin: "5px 0px", color: "#fff" }}
                          >
                            {para}
                          </p>
                        )
                      )}
                      <ul style={{ listStyle: "disc" }} data-dsn-animate="up">
                        <p style={{ margin: "5px 0px", color: "#fff" }}>
                          {translations.about?.section8?.details?.heading}
                        </p>
                        {translations.about?.section8?.details?.bullets?.map(
                          (bullet, bIndex) => (
                            <li style={{ marginLeft: "20px" }}>
                              <p
                                key={bIndex}
                                style={{
                                  margin: "5px 0px",
                                  fontSize: "12px",
                                  color: "#fff",
                                }}
                                dangerouslySetInnerHTML={{ __html: bullet }}
                              ></p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="inner-img" data-dsn-grid="move-up">
                      <img
                        src="/assets/img/about/3.png"
                        alt=""
                        data-dsn-y="30%"
                        data-dsn-scale="1"
                      />
                    </div>
                  </div>
                </section>
              ) : (
                <section className="box-seat box-seat-full">
                  <div className="container-fluid">
                    <div className="inner-img" data-dsn-grid="move-up">
                      <img
                        src="/assets/img/about/3.png"
                        alt=""
                        data-dsn-y="30%"
                        data-dsn-scale="1"
                      />
                    </div>
                    <div
                      className="pro-text right"
                      style={{
                        color: "#fff",
                        backgroundColor: "rgba(35, 63, 63, 0.7)",
                      }}
                    >
                      <h3
                        data-dsn-animate="up"
                        dangerouslySetInnerHTML={{
                          __html: translations.about?.section8?.heading,
                        }}
                        style={{ color: "#fff" }}
                      ></h3>
                      {translations.about?.section8?.paragraphs?.map(
                        (para, pIndex) => (
                          <p
                            key={pIndex}
                            data-dsn-animate="up"
                            style={{ margin: "5px 0px", color: "#fff" }}
                          >
                            {para}
                          </p>
                        )
                      )}
                      <ul style={{ listStyle: "disc" }} data-dsn-animate="up">
                        <p style={{ margin: "5px 0px", color: "#fff" }}>
                          {translations.about?.section8?.details?.heading}
                        </p>
                        {translations.about?.section8?.details?.bullets?.map(
                          (bullet, bIndex) => (
                            <li style={{ marginLeft: "20px" }}>
                              <p
                                key={bIndex}
                                style={{
                                  margin: "5px 0px",
                                  fontSize: "12px",
                                  color: "#fff",
                                }}
                                dangerouslySetInnerHTML={{ __html: bullet }}
                              ></p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </section>
              )}

              <section className="box-seat box-seat-full section-margin">
                <div className="container-fluid">
                  <div
                    className="pro-text left"
                    style={{
                      color: "#fff",
                      backgroundColor: "rgba(35, 63, 63, 0.7)",
                    }}
                  >
                    <h3
                      data-dsn-animate="up"
                      dangerouslySetInnerHTML={{
                        __html: translations.about?.section9?.heading,
                      }}
                      style={{ color: "#fff" }}
                    ></h3>
                    {translations.about?.section9?.paragraphs?.map(
                      (para, pIndex) => (
                        <p
                          key={pIndex}
                          data-dsn-animate="up"
                          style={{ margin: "5px 0px", color: "#fff" }}
                        >
                          {para}
                        </p>
                      )
                    )}
                    <ul style={{ listStyle: "disc" }} data-dsn-animate="up">
                      <p style={{ margin: "5px 0px", color: "#fff" }}>
                        {translations.about?.section9?.details?.heading}
                      </p>
                      {translations.about?.section9?.details?.bullets?.map(
                        (bullet, bIndex) => (
                          <li style={{ marginLeft: "20px" }}>
                            <p
                              key={bIndex}
                              style={{
                                margin: "5px 0px",
                                fontSize: "12px",
                                color: "#fff",
                              }}
                              dangerouslySetInnerHTML={{ __html: bullet }}
                            ></p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="inner-img" data-dsn-grid="move-up">
                    <img
                      src="/assets/img/about/4.png"
                      alt=""
                      data-dsn-y="30%"
                      data-dsn-scale="1"
                    />
                  </div>
                </div>
              </section>

              {isMobView ? (
                <section className="box-seat box-seat-full section-margin">
                  <div className="container-fluid">
                    <div
                      className="pro-text left"
                      style={{
                        color: "#fff",
                        backgroundColor: "rgba(35, 63, 63, 0.7)",
                      }}
                    >
                      <h3
                        data-dsn-animate="up"
                        dangerouslySetInnerHTML={{
                          __html: translations.about?.section7?.heading,
                        }}
                        style={{ color: "#fff" }}
                      ></h3>
                      {translations.about?.section7?.paragraphs?.map(
                        (para, pIndex) => (
                          <p
                            key={pIndex}
                            data-dsn-animate="up"
                            style={{ margin: "5px 0px", color: "#fff" }}
                          >
                            {para}
                          </p>
                        )
                      )}
                      <ul style={{ listStyle: "disc" }} data-dsn-animate="up">
                        <p style={{ margin: "5px 0px", color: "#fff" }}>
                          {translations.about?.section7?.details?.heading}
                        </p>
                        {translations.about?.section7?.details?.bullets?.map(
                          (bullet, bIndex) => (
                            <li style={{ marginLeft: "20px" }}>
                              <p
                                key={bIndex}
                                style={{
                                  margin: "5px 0px",
                                  fontSize: "12px",
                                  color: "#fff",
                                }}
                                dangerouslySetInnerHTML={{ __html: bullet }}
                              ></p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="inner-img" data-dsn-grid="move-up">
                      <img
                        src="/assets/img/about/5.png"
                        alt=""
                        data-dsn-y="30%"
                        data-dsn-scale="1"
                      />
                    </div>
                  </div>
                </section>
              ) : (
                <section className="box-seat box-seat-full">
                  <div className="container-fluid">
                    <div className="inner-img" data-dsn-grid="move-up">
                      <img
                        src="/assets/img/about/5.png"
                        alt=""
                        data-dsn-y="30%"
                        data-dsn-scale="1"
                      />
                    </div>
                    <div
                      className="pro-text right"
                      style={{
                        color: "#fff",
                        backgroundColor: "rgba(35, 63, 63, 0.7)",
                      }}
                    >
                      <h3
                        data-dsn-animate="up"
                        dangerouslySetInnerHTML={{
                          __html: translations.about?.section7?.heading,
                        }}
                        style={{ color: "#fff" }}
                      ></h3>
                      {translations.about?.section7?.paragraphs?.map(
                        (para, pIndex) => (
                          <p
                            key={pIndex}
                            data-dsn-animate="up"
                            style={{ margin: "5px 0px", color: "#fff" }}
                          >
                            {para}
                          </p>
                        )
                      )}
                      <ul style={{ listStyle: "disc" }} data-dsn-animate="up">
                        <p style={{ margin: "5px 0px", color: "#fff" }}>
                          {translations.about?.section7?.details?.heading}
                        </p>
                        {translations.about?.section7?.details?.bullets?.map(
                          (bullet, bIndex) => (
                            <li style={{ marginLeft: "20px" }}>
                              <p
                                key={bIndex}
                                style={{
                                  margin: "5px 0px",
                                  fontSize: "12px",
                                  color: "#fff",
                                }}
                                dangerouslySetInnerHTML={{ __html: bullet }}
                              ></p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </section>
              )}

              <section className="box-seat box-seat-full section-margin">
                <div className="container-fluid">
                  <div
                    className="pro-text left"
                    style={{
                      color: "#fff",
                      backgroundColor: "rgba(35, 63, 63, 0.7)",
                    }}
                  >
                    <h3
                      data-dsn-animate="up"
                      dangerouslySetInnerHTML={{
                        __html: translations.about?.section10?.heading,
                      }}
                      style={{ color: "#fff" }}
                    ></h3>
                    {translations.about?.section10?.paragraphs?.map(
                      (para, pIndex) => (
                        <p
                          key={pIndex}
                          data-dsn-animate="up"
                          style={{ margin: "5px 0px", color: "#fff" }}
                        >
                          {para}
                        </p>
                      )
                    )}
                    <ul style={{ listStyle: "disc" }} data-dsn-animate="up">
                      <p style={{ margin: "5px 0px", color: "#fff" }}>
                        {translations.about?.section10?.details?.heading}
                      </p>
                      {translations.about?.section10?.details?.bullets?.map(
                        (bullet, bIndex) => (
                          <li style={{ marginLeft: "20px" }}>
                            <p
                              key={bIndex}
                              style={{
                                margin: "5px 0px",
                                fontSize: "12px",
                                color: "#fff",
                              }}
                              dangerouslySetInnerHTML={{ __html: bullet }}
                            ></p>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="inner-img" data-dsn-grid="move-up">
                    <img
                      src="/assets/img/about/6.png"
                      alt=""
                      data-dsn-y="30%"
                      data-dsn-scale="1"
                    />
                  </div>
                </div>
              </section>
              {/* <section className="intro-about section-margin section-padding hidden">
              <div className="mask-bg"></div>
              <div className="container">
                <div className="row align-items-center h-100">
                  <div className="col-lg-6">
                    <div className="box-im">
                      <div
                        className="cover-bg"
                        data-image-src="assets/img/skills.jpg"
                      ></div>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-1">
                    <div className="small-title">
                      <span className="counter">01</span>
                      <h5>About Us</h5>
                    </div>

                    <div className="content">
                      <h5>Speaking of employee happiness -</h5>
                      <h3>
                        Our two goals are employee happiness and client
                        happiness
                      </h3>
                      <p>
                        We won the Best Workplace award from Great Place to Work
                        3 times in Finland, and once in all of Europe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

              {/* <section className="our-services section-margin">
                <div className="container">
                  <div className="one-title" data-dsn-animate="up">
                    <div className="title-sub-container">
                      <p className="title-sub">
                        {translations.about?.section3?.subHeading}
                      </p>
                    </div>
                    <h2 className="title-main">
                      {translations.about?.section3?.heading}
                    </h2>
                  </div>

                  <div className="row">
                    {translations.about?.section3?.cards?.map((card, index) => (
                      <div key={index} className="col-md-6">
                        <div className="services-item">
                          <div className="line-before"></div>
                          <h4 className="subtitle">{card.heading}</h4>
                          <p style={{ textAlign: "justify" }}>{card.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section> */}

              <section className="our-team section-margin section-padding">
                <div className="container">
                  <div
                    className="one-title"
                    data-dsn-animate="up"
                    style={{ width: "100%" }}
                  >
                    {/* <div className="title-sub-container">
                      <p className="title-sub">
                        {translations.about?.section4?.subHeading}
                      </p>
                    </div> */}
                    <h2 className="title-main">
                      {translations?.about?.section11?.heading}
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {translations?.about?.section11?.paragraphs[0]}
                    </p>
                  </div>

                  <div className="custom-container">
                    <div className="slick-slider">
                      {translations.about?.section4?.cards?.map(
                        (card, index) => (
                          <div key={index} className="team-item slick-slide">
                            <div className="box-img">
                              {/* <img
                                src={`assets/img/team/${index + 1}.png`}
                                alt=""
                              /> */}
                            </div>

                            <div className="box-content">
                              <h4>{card?.heading}</h4>
                              <p>{card?.subHeading}</p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div
                    className="one-title"
                    data-dsn-animate="up"
                    style={{
                      width: "100%",
                      marginTop: "50px",
                      marginBottom: "0px",
                    }}
                  >
                    {/* <div className="title-sub-container">
                      <p className="title-sub">
                        {translations.about?.section4?.subHeading}
                      </p>
                    </div> */}
                    <h2 className="title-main">
                      {translations?.about?.section12?.heading}
                    </h2>
                    <p style={{ textAlign: "justify" }}>
                      {translations?.about?.section12?.paragraphs[0]}
                    </p>
                  </div>
                </div>
              </section>

              <section className="our-client section-margin">
                <div className="container">
                  <div className="one-title" data-dsn-animate="up">
                    <div className="title-sub-container">
                      <p className="title-sub">
                        {translations.about?.section5?.subHeading}
                      </p>
                    </div>
                    <h2 className="title-main">
                      {translations.about?.section5?.heading}
                    </h2>
                  </div>

                  <div className="client-curs">
                    {translations.about?.section5?.cards?.map((card, index) => (
                      <div key={index} className="client-item">
                        <div>
                          <p>{card.text}</p>
                          <h5>{card.heading}</h5>
                          <span>{card.subHeading}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="brand-client section-margin">
                <div className="container">
                  <div className="one-title" data-dsn-animate="up">
                    <div className="title-sub-container">
                      <p className="title-sub">
                        {translations.about?.section6?.subHeading}
                      </p>
                    </div>
                    <h2 className="title-main">
                      {translations.about?.section6?.heading}
                    </h2>
                  </div>

                  <div className="wapper-client">
                    <div className="logo-box">
                      <img src="assets/img/logo/1-light.png" alt="" />

                      <div className="info">
                        <div className="content">
                          <div className="icon">
                            <i className="fas fa-plus"></i>
                          </div>

                          <div className="entry">
                            <div>
                              <h5>Google</h5>
                              <a href="https://google.com">www.google.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="logo-box">
                      <img src="assets/img/logo/2-light.png" alt="" />

                      <div className="info">
                        <div className="content">
                          <div className="icon">
                            <i className="fas fa-plus"></i>
                          </div>

                          <div className="entry">
                            <div>
                              <h5>Google</h5>
                              <a href="https://google.com">www.google.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="logo-box">
                      <img src="assets/img/logo/3-light.png" alt="" />

                      <div className="info">
                        <div className="content">
                          <div className="icon">
                            <i className="fas fa-plus"></i>
                          </div>

                          <div className="entry">
                            <div>
                              <h5>Google</h5>
                              <a href="https://google.com">www.google.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="logo-box">
                      <img src="assets/img/logo/4-light.png" alt="" />

                      <div className="info">
                        <div className="content">
                          <div className="icon">
                            <i className="fas fa-plus"></i>
                          </div>

                          <div className="entry">
                            <div>
                              <h5>Google</h5>
                              <a href="https://google.com">www.google.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="logo-box">
                      <img src="assets/img/logo/5-light.png" alt="" />

                      <div className="info">
                        <div className="content">
                          <div className="icon">
                            <i className="fas fa-plus"></i>
                          </div>

                          <div className="entry">
                            <div>
                              <h5>Google</h5>
                              <a href="https://google.com">www.google.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="logo-box">
                      <img src="assets/img/logo/6-light.png" alt="" />

                      <div className="info">
                        <div className="content">
                          <div className="icon">
                            <i className="fas fa-plus"></i>
                          </div>

                          <div className="entry">
                            <div>
                              <h5>Google</h5>
                              <a href="https://google.com">www.google.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* <section className="contact-up section-margin section-padding">
            <div className="container">
              <div className="c-wapp">
                <a href="/contact" className="effect-ajax">
                  <span className="hiring">We are hiring</span>
                  <span className="career">Dare and contact us immediately!</span>
                </a>
              </div>
            </div>
          </section> */}

            <Footer />
          </div>
        </div>
      </main>{" "}
    </>
  );
};

export default About;
