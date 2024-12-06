import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

const Services2 = () => {
  const { lang } = useParams();
  const { translations } = useContext(LanguageContext);
  return (
    <>
      <Navbar showBlackBg={true} />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <header style={{ backgroundColor: "#edeae2" }}>
            <div className="container header-hero">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="contenet-hero"
                    style={{ paddingBottom: "0px" }}
                  >
                    {/* <h5>{translations?.privacyPolicy?.subHeading}</h5> */}
                    <h1>{translations?.services2?.heading}</h1>
                    <p style={{ textAlign: "justify" }}>
                      {translations?.services2?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </main>
      {/* <Section1 /> */}
    </>
  );
};

export default Services2;

const Section1 = () => {
  const { lang } = useParams();
  const { translations } = useContext(LanguageContext);
  return (
    <>
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
                  style={{ padding: "50px 0px", paddingBottom: "30px" }}
                >
                  <h1 style={{ maxWidth: "100%" }}>
                    {translations?.services2?.section1?.header?.title}
                  </h1>
                  {translations?.services2?.section1?.header?.paragraphs?.map(
                    (para, pIndex) => (
                      <p
                        key={pIndex}
                        style={{ maxWidth: "100%", textAlign: "justify" }}
                      >
                        {para}
                      </p>
                    )
                  )}
                  <a
                    href="#section1"
                    className="view-case scroll-down scroll-to"
                  >
                    {translations?.services2?.section1?.header?.text}
                    <img src="/assets/img/arrow-right-dark.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="section1" className="wrapper" style={{ backgroundColor: "#edeae2" }}>
        <div className="root-work">
          <div className="container">
            {/* <div className="box-title" data-dsn-title="cover">
                  <h2
                    className="title-cover"
                    data-dsn-grid="move-section"
                    data-dsn-move="-70"
                  >
                    {translations?.services?.text}
                  </h2>
                </div> */}

            <div className="filterings" style={{ marginBottom: "40px" }}>
              <div className="filtering-wrap">
                <div id="filtering1" className="filtering">
                  <div className="selector"></div>
                  {/* <button
                        type="button"
                        data-filter="*"
                        className="active"
                      >
                        All
                      </button> */}
                  <button type="button" data-filter=".s-m" className="active">
                    {
                      translations?.services2?.section1?.filtering
                        ?.categories[0]
                    }
                  </button>
                  <button type="button" data-filter=".s-a-a">
                    {
                      translations?.services2?.section1?.filtering
                        ?.categories[1]
                    }
                  </button>
                  <button type="button" data-filter=".t-a">
                    {
                      translations?.services2?.section1?.filtering
                        ?.categories[2]
                    }
                  </button>
                  <button type="button" data-filter=".o-e">
                    {
                      translations?.services2?.section1?.filtering
                        ?.categories[3]
                    }
                  </button>
                  <button type="button" data-filter=".e-e">
                    {
                      translations?.services2?.section1?.filtering
                        ?.categories[4]
                    }
                  </button>
                  <button type="button" data-filter=".f-s">
                    {
                      translations?.services2?.section1?.filtering
                        ?.categories[5]
                    }
                  </button>
                  <button type="button" data-filter=".d-a">
                    {
                      translations?.services2?.section1?.filtering
                        ?.categories[6]
                    }
                  </button>
                </div>
              </div>
            </div>

            <div id="gallery1" className="projects-list gallery">
              <div className="item s-m" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section1?.sections[0]?.title}
                  </h3>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    {translations?.services2?.section1?.sections[0]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item s-a-a" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section1?.sections[1]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section1?.sections[1]
                        ?.description
                    }
                  </p>
                </a>
              </div>
              <div className="item t-a" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section1?.sections[2]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section1?.sections[2]
                        ?.description
                    }
                  </p>
                </a>
              </div>
              <div className="item o-e" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section1?.sections[3]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section1?.sections[3]
                        ?.description
                    }
                  </p>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section1?.sections[3]
                          ?.subHeading
                      }
                    </p>
                    {translations?.services2?.section1?.sections[3]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item e-e" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section1?.sections[4]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section1?.sections[4]
                        ?.description
                    }
                  </p>
                  {/* {translations.about?.section2?.paragraphs?.map(
                        (para, pIndex) => (
                          <p
                            key={pIndex}
                            data-dsn-animate="up"
                            style={{ margin: "5px 0px", color: "#000" }}
                          >
                            {para}
                          </p>
                        )
                      )} */}
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section1?.sections[4]
                          ?.subHeading
                      }
                    </p>
                    {translations?.services2?.section1?.sections[4]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item f-s" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section1?.sections[5]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section1?.sections[5]
                        ?.description
                    }
                  </p>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section1?.sections[5]
                          ?.subHeading
                      }
                    </p>
                    {translations?.services2?.section1?.sections[5]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item d-a" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section1?.sections[6]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section1?.sections[6]
                        ?.description
                    }
                  </p>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section1?.sections[6]
                          ?.subHeading
                      }
                    </p>
                    {translations?.services2?.section1?.sections[6]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section2 = () => {
  const { lang } = useParams();
  const { translations } = useContext(LanguageContext);
  return (
    <>
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
                  style={{ padding: "50px 0px", paddingBottom: "30px" }}
                >
                  <h1 style={{ maxWidth: "100%" }}>
                    {translations?.services2?.section2?.header?.title}
                  </h1>
                  <p style={{ maxWidth: "100%", textAlign: "justify" }}>
                    {translations?.services2?.section2?.header?.paragraphs[0]}
                  </p>
                  <a
                    href="#section2"
                    className="view-case scroll-down scroll-to"
                  >
                    {translations?.services2?.section1?.header?.text}
                    <img src="/assets/img/arrow-right-dark.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="section2" className="wrapper" style={{ backgroundColor: "#edeae2" }}>
        <div className="root-work">
          <div className="container">
            <div className="filterings" style={{ marginBottom: "40px" }}>
              <div className="filtering-wrap">
                <div id="filtering2" className="filtering">
                  <div className="selector"></div>
                  <button type="button" data-filter=".i-m" className="active">
                    {
                      translations?.services2?.section2?.filtering
                        ?.categories[0]
                    }
                  </button>
                  <button type="button" data-filter=".g-m-m">
                    {
                      translations?.services2?.section2?.filtering
                        ?.categories[1]
                    }
                  </button>
                  <button type="button" data-filter=".p-m">
                    {
                      translations?.services2?.section2?.filtering
                        ?.categories[2]
                    }
                  </button>
                  <button type="button" data-filter=".t-m">
                    {
                      translations?.services2?.section2?.filtering
                        ?.categories[3]
                    }
                  </button>
                </div>
              </div>
            </div>

            <div id="gallery2" className="projects-list gallery">
              <div className="item i-m" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section2?.sections[0]?.title}
                  </h3>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section2?.sections[0]
                          ?.description
                      }
                    </p>
                    {translations?.services2?.section2?.sections[0]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item g-m-m" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section2?.sections[1]?.title}
                  </h3>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section2?.sections[1]
                          ?.description
                      }
                    </p>
                    {translations?.services2?.section2?.sections[1]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item p-m" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section2?.sections[2]?.title}
                  </h3>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section2?.sections[2]
                          ?.description
                      }
                    </p>
                    {translations?.services2?.section2?.sections[2]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item t-m" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "fit-content", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section2?.sections[3]?.title}
                  </h3>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section2?.sections[3]
                          ?.description
                      }
                    </p>
                    {translations?.services2?.section2?.sections[3]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section3 = () => {
  const { lang } = useParams();
  const { translations } = useContext(LanguageContext);
  return (
    <>
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
                  style={{ padding: "50px 0px", paddingBottom: "30px" }}
                >
                  <h1 style={{ maxWidth: "100%" }}>
                    {translations?.services2?.section3?.header?.title}
                  </h1>
                  <p style={{ maxWidth: "100%", textAlign: "justify" }}>
                    {translations?.services2?.section3?.header?.paragraphs[0]}
                  </p>
                  <a
                    href="#section3"
                    className="view-case scroll-down scroll-to"
                  >
                    {translations?.services2?.section3?.header?.text}
                    <img src="/assets/img/arrow-right-dark.png" alt="" />

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="section3" className="wrapper" style={{ backgroundColor: "#edeae2" }}>
        <div className="root-work">
          <div className="container">
            <div className="filterings" style={{ marginBottom: "40px" }}>
              <div className="filtering-wrap">
                <div id="filtering3" className="filtering">
                  <div className="selector"></div>

                  <button type="button" data-filter=".m-s" className="active">
                    {
                      translations?.services2?.section3?.filtering
                        ?.categories[0]
                    }
                  </button>
                  <button type="button" data-filter=".s-c">
                    {
                      translations?.services2?.section3?.filtering
                        ?.categories[1]
                    }
                  </button>
                  <button type="button" data-filter=".d-t-s">
                    {
                      translations?.services2?.section3?.filtering
                        ?.categories[2]
                    }
                  </button>
                  <button type="button" data-filter=".c-p-c-m">
                    {
                      translations?.services2?.section3?.filtering
                        ?.categories[3]
                    }
                  </button>
                  <button type="button" data-filter=".f-o-a">
                    {
                      translations?.services2?.section3?.filtering
                        ?.categories[4]
                    }
                  </button>
                  <button type="button" data-filter=".q-f-m">
                    {
                      translations?.services2?.section3?.filtering
                        ?.categories[5]
                    }
                  </button>
                </div>
              </div>
            </div>

            <div id="gallery3" className="projects-list gallery">
              <div className="item m-s" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "100%", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section3?.sections[0]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section3?.sections[0]
                        ?.description
                    }
                  </p>
                  <ul
                    style={{ listStyle: "disc" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section3?.sections[0]
                          ?.subHeading
                      }
                    </p>
                    {translations?.services2?.section3?.sections[0]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item s-c" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "100%", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section3?.sections[1]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section3?.sections[1]
                        ?.description
                    }
                  </p>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section3?.sections[1]
                          ?.subHeading
                      }
                    </p>
                    {translations?.services2?.section3?.sections[1]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item d-t-s" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "100%", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section3?.sections[2]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section3?.sections[2]
                        ?.description
                    }
                  </p>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section3?.sections[2]
                          ?.description
                      }
                    </p>
                    {translations?.services2?.section3?.sections[2]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item c-p-c-m" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "100%", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section3?.sections[3]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section3?.sections[3]
                        ?.description
                    }
                  </p>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section3?.sections[3]
                          ?.subHeading
                      }
                    </p>
                    {translations?.services2?.section3?.sections[3]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item f-o-a" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "100%", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section3?.sections[4]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section3?.sections[4]
                        ?.description
                    }
                  </p>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section3?.sections[4]
                          ?.subHeading
                      }
                    </p>
                    {translations?.services2?.section3?.sections[4]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
              <div className="item q-f-m" style={{ width: "100%" }}>
                <a
                  href={`/${lang}/services`}
                  className=""
                  data-dsn-ajax="work"
                  data-dsn-grid="move-up"
                  style={{ height: "100%", marginBottom: "20px" }}
                >
                  <h3 data-dsn-animate="up" style={{ color: "#000" }}>
                    {translations?.services2?.section3?.sections[5]?.title}
                  </h3>
                  <p
                    data-dsn-animate="up"
                    style={{
                      margin: "5px 0px",
                      color: "#000",
                      textAlign: "justify",
                    }}
                  >
                    {
                      translations?.services2?.section3?.sections[5]
                        ?.description
                    }
                  </p>
                  <ul
                    style={{ listStyle: "disc", textAlign: "justify" }}
                    data-dsn-animate="up"
                  >
                    <p style={{ margin: "5px 0px", color: "#000" }}>
                      {
                        translations?.services2?.section3?.sections[5]
                          ?.subHeading
                      }
                    </p>
                    {translations?.services2?.section3?.sections[5]?.details?.map(
                      (detail, dIndex) => (
                        <li key={dIndex} style={{ marginLeft: "20px" }}>
                          <p
                            style={{
                              margin: "5px 0px",
                              fontSize: "16px",
                              color: "#000",
                            }}
                          >
                            {detail}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
