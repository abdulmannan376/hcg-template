import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useParams } from "react-router-dom";
import { FaLanguage } from "react-icons/fa";

const LanguageToggle = () => {
  const { lang } = useParams();
  const { translations, toggleLanguage } = useContext(LanguageContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageSelect = (lang) => {
    toggleLanguage(lang);
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
  };

  const englishBtn = useRef();
  const germanBtn = useRef();
  const croatianBtn = useRef();

  const [showLangIcon, setShowLangIcon] = useState(true);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 420) {
      setShowLangIcon(false);
      const toggleButton = document.getElementById("toggle-button")
      toggleButton.style.padding = "10px 10px"
    }
  }, []);

  useEffect(() => {
    if (lang && isDropdownOpen) {
      if (lang === "en") {
        if (englishBtn) englishBtn.current?.classList.add("active");
        if (germanBtn) germanBtn.current?.classList.remove("active");
        if (croatianBtn) croatianBtn.current?.classList.remove("active");
      } else if (lang === "de") {
        if (englishBtn) englishBtn.current?.classList.remove("active");
        if (germanBtn) germanBtn.current?.classList.add("active");
        if (croatianBtn) croatianBtn.current?.classList.remove("active");
      } else if (lang === "hr") {
        if (englishBtn) englishBtn.current?.classList.remove("active");
        if (germanBtn) germanBtn.current?.classList.remove("active");
        if (croatianBtn) croatianBtn.current?.classList.add("active");
      }
    }
  }, [lang, isDropdownOpen]);

  return (
    <div
      className="language-toggle"
      style={{
        position: "relative",
        display: "inline-block",
        justifyContent: "end",
      }}
      onMouseEnter={(e) => {
        e.stopPropagation();
        setIsDropdownOpen(true); // Toggle dropdown open state
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setIsDropdownOpen(false); // Toggle dropdown open state
      }}
    >
      {/* Dropdown Toggle Button */}
      <button
        style={{
          padding: "1px 10px",
          cursor: "pointer",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center"
        }}
        id="toggle-button"
      >
        {showLangIcon ? <FaLanguage style={{ fontSize: "30px", display: "inline-flex", marginRight: "5px"}}/> : translations.language} ▼
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className="dropdown-menu"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            color: "#000",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLanguageSelect("en");
            }}
            ref={englishBtn}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              cursor: "pointer",
              color: "#000",
            }}
          >
            English
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLanguageSelect("de");
            }}
            ref={germanBtn}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              cursor: "pointer",
              color: "#000",
            }}
          >
            German
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleLanguageSelect("hr");
            }}
            ref={croatianBtn}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              cursor: "pointer",
              color: "#000",
            }}
          >
            Croatian
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
