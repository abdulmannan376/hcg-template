import React, { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { LanguageContext } from "../context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { translations } = useContext(LanguageContext);
  return (
    <>
      <Navbar showBlackBg={true} />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <header style={{ backgroundColor: "#edeae2"}}>
            <div className="container header-hero">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contenet-hero" style={{ paddingBottom: "30px"}}>
                    <h5>{translations?.privacyPolicy?.subHeading}</h5>
                    <h1>{translations?.privacyPolicy?.heading}</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="wrapper" style={{ backgroundColor: "#edeae2"}}>
            <div className="privacy-policy container section-margin">
              <section>
                <p>{translations?.privacyPolicy?.intro}</p>

                <h3>{translations?.privacyPolicy?.sections[0]?.title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: translations?.privacyPolicy?.sections[0]?.text1,
                  }}
                ></p>
                <p>{translations?.privacyPolicy?.sections[0]?.content}</p>

                <h3>{translations?.privacyPolicy?.sections[1]?.title}</h3>
                <p>{translations?.privacyPolicy?.sections[1]?.content}</p>

                <h3>{translations?.privacyPolicy?.sections[2]?.title}</h3>
                <h5>
                  {
                    translations?.privacyPolicy?.sections[2]?.subsections[0]
                      ?.title
                  }
                </h5>
                <ul>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[2]?.subsections[0]
                        ?.items[0]
                    }
                  </li>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[2]?.subsections[0]
                        ?.items[1]
                    }
                  </li>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[2]?.subsections[0]
                        ?.items[2]
                    }
                  </li>
                </ul>
                <h5>
                  {
                    translations?.privacyPolicy?.sections[2]?.subsections[1]
                      ?.title
                  }
                </h5>
                <ul>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[2]?.subsections[1]
                        ?.items[0]
                    }
                  </li>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[2]?.subsections[1]
                        ?.items[1]
                    }
                  </li>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[2]?.subsections[1]
                        ?.items[2]
                    }
                  </li>
                </ul>

                <h3>{translations?.privacyPolicy?.sections[3]?.title}</h3>
                <h5>
                  {
                    translations?.privacyPolicy?.sections[3]?.subsections[0]
                      ?.title
                  }
                </h5>
                <ul>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[3]?.subsections[0]
                        ?.items[0]
                    }
                  </li>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[3]?.subsections[0]
                        ?.items[1]
                    }
                  </li>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[3]?.subsections[0]
                        ?.items[2]
                    }
                  </li>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[3]?.subsections[0]
                        ?.items[3]
                    }
                  </li>
                </ul>
                <h5>
                  {
                    translations?.privacyPolicy?.sections[3]?.subsections[1]
                      ?.title
                  }
                </h5>
                <ul>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[3]?.subsections[1]
                        ?.items[0]
                    }
                  </li>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[3]?.subsections[1]
                        ?.items[1]
                    }
                  </li>
                  <li>
                    {
                      translations?.privacyPolicy?.sections[3]?.subsections[1]
                        ?.items[2]
                    }
                  </li>
                </ul>

                <h3>{translations?.privacyPolicy?.sections[4]?.title}</h3>
                <ul>
                  <li>
                    {translations?.privacyPolicy?.sections[4]?.content[0]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[4]?.content[1]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[4]?.content[2]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[4]?.content[3]}
                  </li>
                </ul>

                <h3>{translations?.privacyPolicy?.sections[5]?.title}</h3>
                <ul>
                  <li>
                    {translations?.privacyPolicy?.sections[5]?.content[0]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[5]?.content[1]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[5]?.content[2]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[5]?.content[3]}
                  </li>
                </ul>

                <h3>{translations?.privacyPolicy?.sections[6]?.title}</h3>
                <p>{translations?.privacyPolicy?.sections[6]?.content[0]}</p>
                <ul>
                  <li>
                    {translations?.privacyPolicy?.sections[6]?.content[1]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[6]?.content[2]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[6]?.content[3]}
                  </li>
                </ul>

                <h3>{translations?.privacyPolicy?.sections[7]?.title}</h3>
                <p>{translations?.privacyPolicy?.sections[7]?.content[0]}</p>
                <ul>
                  <li>
                    {translations?.privacyPolicy?.sections[7]?.content[1]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[7]?.content[2]}
                  </li>
                  <li>
                    {translations?.privacyPolicy?.sections[7]?.content[3]}
                  </li>
                </ul>

                <h3>{translations?.privacyPolicy?.sections[8]?.title}</h3>
                <p>{translations?.privacyPolicy?.sections[8]?.content[0]}</p>
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[8]?.content[1],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[8]?.content[2],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[8]?.content[3],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[8]?.content[4],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[8]?.content[5],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[8]?.content[6],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[8]?.content[7],
                    }}
                  ></li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      translations?.privacyPolicy?.sections[8]?.content[8],
                  }}
                ></p>

                <h3>{translations?.privacyPolicy?.sections[9]?.title}</h3>
                <p>{translations?.privacyPolicy?.sections[9]?.content[0]}</p>
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[9]?.content[1],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[9]?.content[2],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html:
                        translations?.privacyPolicy?.sections[9]?.content[3],
                    }}
                  ></li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      translations?.privacyPolicy?.sections[9]?.content[4],
                  }}
                ></p>

                <h3>{translations?.privacyPolicy?.sections[10]?.title}</h3>
                {translations?.privacyPolicy?.sections[10]?.subsections.map(
                  (subSection, ssIndex) => (
                    <React.Fragment key={ssIndex}>
                      <h5>{subSection.title}</h5>
                      <ul>
                        {subSection.items.map((item, iIndex) => (
                          <li key={iIndex}>{item}</li>
                        ))}
                      </ul>
                    </React.Fragment>
                  )
                )}

                <h3>{translations?.privacyPolicy?.sections[11]?.title}</h3>
                <p>{translations?.privacyPolicy?.sections[11]?.content}</p>
                <a href="https://ico.org.uk/">https://ico.org.uk/</a>

                <h3>{translations?.privacyPolicy?.sections[12]?.title}</h3>
                <p>{translations?.privacyPolicy?.sections[12]?.content}</p>
              </section>
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
