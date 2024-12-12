import { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { LanguageContext } from "../context/LanguageContext";

export default function Impressum() {
  const { translations } = useContext(LanguageContext);
  return (
    <>
      <Navbar showBlackBg={true} />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <header style={{ backgroundColor: "#edeae2" }}>
            <div className="container header-hero">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="contenet-hero"
                    style={{ paddingBottom: "30px" }}
                  >
                    <h5>{translations?.impressum?.heading}</h5>
                    <h1>{translations?.impressum?.subHeading}</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="wrapper" style={{ backgroundColor: "#edeae2" }}>
            <div className="privacy-policy container section-margin">
              <section>
                {/* <h2>Privacy Policy</h2> */}
                <p>{translations?.impressum?.intro}</p>

                <h3>{translations?.impressum?.sections[0]?.title}</h3>
                <p>{translations?.impressum?.sections[0]?.content[0]}</p>
                <ul>
                  <li>{translations?.impressum?.sections[0]?.content[1]}</li>
                  <li>{translations?.impressum?.sections[0]?.content[2]}</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: translations?.impressum?.sections[0]?.content[3],
                  }}
                ></p>
                <ul>
                  <li>{translations?.impressum?.sections[0]?.content[4]}</li>
                  <li>{translations?.impressum?.sections[0]?.content[5]}</li>
                </ul>

                <h3>{translations?.impressum?.sections[1]?.title}</h3>
                <p>{translations?.impressum?.sections[1]?.content[0]}</p>
                <ul>
                  <li>{translations?.impressum?.sections[1]?.content[1]}</li>
                  <li>{translations?.impressum?.sections[1]?.content[2]}</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: translations?.impressum?.sections[1]?.content[3],
                  }}
                ></p>
                <ul>
                  <li>{translations?.impressum?.sections[1]?.content[4]}</li>
                  <li>{translations?.impressum?.sections[1]?.content[5]}</li>
                </ul>

                <h3>{translations?.impressum?.sections[2]?.title}</h3>
                <p>{translations?.impressum?.sections[2]?.content[0]}</p>
                <ul>
                  <li>{translations?.impressum?.sections[2]?.content[1]}</li>
                  <li>{translations?.impressum?.sections[2]?.content[2]}</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: translations?.impressum?.sections[2]?.content[3],
                  }}
                ></p>

                <h3>{translations?.impressum?.sections[3]?.title}</h3>
                <p>{translations?.impressum?.sections[3]?.content[0]}</p>
                <ul>
                  <li>{translations?.impressum?.sections[3]?.content[1]}</li>
                  <li>{translations?.impressum?.sections[3]?.content[2]}</li>
                </ul>

                <h3>{translations?.impressum?.sections[4]?.title}</h3>
                <p>{translations?.impressum?.sections[4]?.content[0]}</p>
                <ul>
                  <li>{translations?.impressum?.sections[4]?.content[1]}</li>
                  <li>{translations?.impressum?.sections[4]?.content[2]}</li>
                  <li>{translations?.impressum?.sections[4]?.content[3]}.</li>
                </ul>
                <p
                  dangerouslySetInnerHTML={{
                    __html: translations?.impressum?.sections[4]?.content[4],
                  }}
                ></p>

                <h3>{translations?.impressum?.sections[5]?.title}</h3>
                <p>{translations?.impressum?.sections[5]?.content[0]}</p>

                <h3>{translations?.impressum?.sections[6]?.title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: translations?.impressum?.sections[6]?.content[0],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: translations?.impressum?.sections[6]?.content[1],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: translations?.impressum?.sections[6]?.content[2],
                  }}
                ></p>

                <h3>{translations?.impressum?.sections[7]?.title}</h3>
                <p>{translations?.impressum?.sections[7]?.content[0]}</p>
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: translations?.impressum?.sections[7]?.content[1],
                    }}
                  ></li>
                </ul>
                <h3>{translations?.impressum?.sections[8]?.title}</h3>
                {/* <p>{translations?.impressum?.sections[8]?.content[0]}</p> */}
                <ul>
                  {translations?.impressum?.sections[8]?.content?.map(
                    (item) => (
                      <li
                        dangerouslySetInnerHTML={{
                          __html: item,
                        }}
                      ></li>
                    )
                  )}
                </ul>
              </section>
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
