import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children, lang }) => {   
//   console.log("Param lang: ", lang)
  const [language, setLanguage] = useState(lang || "en");
//   console.log("language: ", language)
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      const response = await fetch(`/locales/${language}.json`);
      const data = await response.json();
      setTranslations(data);
    };
    loadTranslations();
  }, [language]);

  const toggleLanguage = (lang) => {
    console.log(lang);
    setLanguage(lang);
  
    // Split the current path and replace the first segment with the new language
    const paths = window.location.pathname.split("/");
    paths[1] = lang;
  
    // Construct the new URL using the updated path
    const newUrl = `${window.location.origin}${paths.join("/")}`;
    console.log("New URL: ", newUrl);
  
    // Set the new URL, causing a page reload
    window.location.href = newUrl;
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
