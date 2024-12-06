import React, { useState, useRef, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useParams } from "react-router-dom";
import LanguageToggle from "./LanguageToggleDropdown";

const Navbar = ({ showBlackBg }) => {
  const { translations, toggleLanguage, language } =
    useContext(LanguageContext);
  const { lang } = useParams();
  const [isNavActive, setIsNavActive] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
    document.body.classList.toggle("nav-active", !isNavActive);
  };

  // Dropdown toggle states for each dropdown
  const [dropdownOpen, setDropdownOpen] = useState({});

  // Handles toggling each dropdown individually
  const handleDropdownToggle = (index) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const menuRef = useRef()

  function modifyMenuIcons () {
    const width = window.innerWidth
    if(width < 450 && menuRef.current && lang === "hr") {
      menuRef.current.style.marginRight = "80px"
    }
  }

  useEffect(() => {
    modifyMenuIcons()
  }, [menuRef])
  

  useEffect(() => {
    // Example of setting up a side effect for additional logic
    // or styles based on navbar active state

    return () => {
      // Clean up when component unmounts or dependencies change
      document.body.classList.remove("nav-active");
    };
  }, []);

  return (
    <div className="dsn-nav-bar ">
      <div className="site-header">
        <div className="extend-container">
          <div className="inner-header">
            <div className="main-logo">
              <a href={`/${lang}`}>
                <img
                  className="dark-logo"
                  src="/assets/img/HCG-logo.svg"
                  alt="Dark Logo"
                />
                <img
                  className="light-logo"
                  src="/assets/img/HCG-logo.svg"
                  alt="Light Logo"
                />
              </a>
            </div>
          </div>
          <nav ref={navRef} className="accent-menu main-navigation">
            <ul className="extend-container">
              <li>
                <a href={`/${language || "en"}`}>{translations.home?.name}</a>
              </li>
              {/* Dropdown example */}
              <li>
                <a href={`/${language || "en"}/about`}>
                  {translations.about?.name}
                </a>
              </li>
              <li>
                <a href={`/${language || "en"}/projects`}>
                  {translations.services?.name}
                </a>
              </li>
              <li>
                <a href={`/${language || "en"}/contact`}>
                  {translations.contact?.name}
                </a>
              </li>
              <li>
                <a href={`/${language || "en"}/privacy-policy`}>
                  {translations.privacyPolicy?.name}
                </a>
              </li>
              <li>
                <a href={`/${language || "en"}/imprint`}>
                  {translations.impressum?.name}
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className="language-toggle">
            <button onClick={() => toggleLanguage("en")}>English</button>
            <button onClick={() => toggleLanguage("de")}>German</button>
            <button onClick={() => toggleLanguage("hr")}>Croatian</button>
          </div> */}
        </div>
      </div>

      <div className="header-top header-top-hamburger">
        <div
          className={`header-container ${showBlackBg ? "navbar-bg-black" : ""}`}
        >
          <div className="logo main-logo">
            <a href={`/${lang}`}>
              <img
                className="dark-logo"
                src="/assets/img/HCG-logo.svg"
                alt="Dark Logo"
              />
              <img
                className="light-logo"
                src="/assets/img/HCG-logo.svg"
                alt="Light Logo"
                style={{ width: "140px" }}
              />
            </a>
          </div>

          {/* <div className="language-toggle">
            <button onClick={() => toggleLanguage("en")}>English</button>
            <button onClick={() => toggleLanguage("de")}>German</button>
            <button onClick={() => toggleLanguage("hr")}>Croatian</button>
          </div> */}

          <div
            onClick={toggleNav}
            className="menu-icon"
            ref={menuRef}
            data-dsn="parallax"
            data-dsn-move="5"
          >
            <div className="icon-m">
              <i className="menu-icon-close fas fa-times"></i>
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>

            <div className="text-menu">
              <div className="text-button">{translations.menu}</div>
              <div className="text-open">{translations.open}</div>
              <div className="text-close">{translations.close}</div>
            </div>
          </div>
          <LanguageToggle />
          {/* <div
            className="language-toggle"
            style={{ display: "inline-flex", justifyContent: "end" }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLanguage("en");
              }}
            >
              En
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLanguage("de");
              }}
            >
              De
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLanguage("hr");
              }}
            >
              Hr
            </button>
          </div> */}
          <div className="nav">
            <div className="inner">
              <div className="nav__content">
                {/* Place content here for mobile navigation */}
                <ul className="nav__list">
                  <li className="nav__list-item">
                    <a href={`/${language || "en"}/`} onClick={toggleNav}>
                      {translations.home?.name}
                    </a>
                  </li>
                  {/* Dropdown example */}
                  <li className="nav__list-item">
                    <a
                      href={`/${language || "en"}/projects`}
                      onClick={toggleNav}
                    >
                      {translations.services?.name}
                    </a>
                  </li>
                  <li className="nav__list-item">
                    <a
                      href={`/${language || "en"}/services`}
                      onClick={toggleNav}
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav__list-item">
                    <a href={`/${language || "en"}/about`} onClick={toggleNav}>
                      {translations.about?.name}
                    </a>
                  </li>
                  <li className="nav__list-item">
                    <a
                      href={`/${language || "en"}/imprint`}
                      onClick={toggleNav}
                    >
                      {translations.impressum?.name}
                    </a>
                  </li>
                  <li className="nav__list-item">
                    <a
                      href={`/${language || "en"}/privacy-policy`}
                      onClick={toggleNav}
                    >
                      {translations.privacyPolicy?.name}
                    </a>
                  </li>
                  <li className="nav__list-item">
                    <a
                      href={`/${language || "en"}/contact`}
                      onClick={toggleNav}
                    >
                      {translations.contact?.name}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-content">
            <div className="inner-content">
              <address className="v-middle">
                <span className="dmsans-600">Hotel Consulting Group Ltd.</span>
                <span className="dmsans-600">81 Skipper Way St. Neots PE19 6LT, England</span>
                <span className="dmsans-600">12047431</span>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
