import React, { useContext, useState } from "react";
import Footer from "./Footer";
import { LanguageContext } from "../context/LanguageContext";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import LeafletMap from "./LeafletMap";
import emailjs from "emailjs-com";

const Contact = () => {
  const { translations } = useContext(LanguageContext);
  const { lang } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceID, // Replace with your EmailJS Service ID
        templateID, // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        publicKey // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setStatus({ type: "success", message: "Email Sent" });
          setFormData({ name: "", email: "", message: "" }); // Reset form on success
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <>
      <Navbar showBlackBg={true} />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <header>
            <div className="container header-hero">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contenet-hero">
                    <h5>{translations?.contact?.section1?.subHeading}</h5>
                    <h1>{translations?.contact?.section1?.heading}</h1>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* <section className="contact-up section-padding">
            <div className="container">
              <div className="c-wapp">
                <a href={`/${lang}/about`} className="">
                  <span className="hiring">
                    {translations?.contact?.section4?.heading}
                  </span>
                  <span className="career">
                    {translations?.contact?.section4?.subHeading}
                  </span>
                </a>
              </div>
            </div>
          </section> */}
          <div className="wrapper">
            <div className="root-contact">
              {/* <div className="container-fluid section-margin">
                <LeafletMap
                  coordinates={["52.240824", "-0.268414"]}
                  zoom={17}
                />
                <div
                className="map-custom"
                id="map"
                data-dsn-lat="30.0489206"
                data-dsn-len="31.258553"
                data-dsn-zoom="14"
              ></div>
              </div> */}

              <div className="container section-margin">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box-info-contact">
                      <h3>
                        {translations?.contact?.section2?.cards[0].heading}
                      </h3>
                      <h5>
                        {translations?.contact?.section2?.cards[0].subHeading}
                      </h5>
                      {/* <p>
                      Sed ut perspiciatis unde omnis iste natus error sit vo
                      luptatem accusantium natus error sit omnis iste natus
                    </p> */}

                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <span>
                            {
                              translations?.contact?.section2?.cards[0]
                                .options[0]
                            }
                          </span>
                          <a href="tel:34633738138">+34 (633) 73 81 38</a>
                        </li>
                        <li>
                          <span>
                            {
                              translations?.contact?.section2?.cards[0]
                                .options[1]
                            }
                          </span>
                          <a href="mailTo:info@hotelconsultinggroup.com">
                            info@hotelconsultinggroup.com
                          </a>
                        </li>
                        <li>
                          <div style={{ display: "flex" }}>
                            <span style={{ marginTop: "7px" }}>
                              {
                                translations?.contact?.section2?.cards[0]
                                  .options[2]
                              }
                            </span>
                            <a
                              href="https://maps.app.goo.gl/i1DsHw3j5YU58GiW8"
                              target="_blank"
                              style={{ width: "300px" }}
                            >
                              Hotel Consulting Group Ltd. 81 Skipper Way St.
                              Neots PE19 6LT, England 1204743
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-box">
                      <h3>
                        {translations?.contact?.section2?.cards[1].heading}
                      </h3>
                      <form
                        id="contact-form-new"
                        className="form"
                        //   method="post"
                        //   action="contact.php"
                        data-toggle="validator"
                        onSubmit={handleSubmit}
                      >
                        {status.message && (
                          <div
                            classNameName={`alert ${
                              status.type === "success"
                                ? "alert-success"
                                : "alert-danger"
                            }`}
                          >
                            {status.message}
                          </div>
                        )}
                        <div className="input__wrap controls">
                          <div className="form-group">
                            <div className="entry">
                              <label>
                                {
                                  translations?.contact?.section2?.cards[1]
                                    .options[0].label
                                }
                              </label>
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                placeholder={
                                  translations?.contact?.section2?.cards[1]
                                    .options[0].placeholder
                                }
                                required="required"
                                value={formData.name}
                                onChange={handleChange}
                                data-error="name is required."
                              />
                            </div>
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="form-group">
                            <div className="entry">
                              <label>
                                {
                                  translations?.contact?.section2?.cards[1]
                                    .options[1].label
                                }
                              </label>
                              <input
                                id="form_email"
                                type="email"
                                name="email"
                                placeholder={
                                  translations?.contact?.section2?.cards[1]
                                    .options[1].placeholder
                                }
                                required="required"
                                value={formData.email}
                                onChange={handleChange}
                                data-error="Valid email is required."
                              />
                            </div>
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="form-group">
                            <div className="entry">
                              <label>
                                {
                                  translations?.contact?.section2?.cards[1]
                                    .options[2].label
                                }
                              </label>
                              <textarea
                                id="form_message"
                                className="form-control"
                                name="message"
                                placeholder={
                                  translations?.contact?.section2?.cards[1]
                                    .options[2].placeholder
                                }
                                required="required"
                                value={formData.message}
                                onChange={handleChange}
                                data-error="Please,leave us a message."
                              ></textarea>
                            </div>
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="image-zoom" data-dsn="parallax">
                            <button>
                              {
                                translations?.contact?.section2?.cards[1]
                                  .actionText
                              }
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <section className="contact-up section-margin section-padding">
              <div className="container">
                <div className="c-wapp">
                  <a href={`/${lang}/projects`} className="">
                    <span className="hiring" style={{ textAlign: "start" }}>
                      {translations?.contact?.section3?.heading}
                    </span>
                    <span className="career">{translations?.contact?.section3?.subHeading}</span>
                  </a>
                </div>
              </div>
            </section> */}

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
