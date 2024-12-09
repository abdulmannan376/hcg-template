// import './App.css';
// import "./styles/style.css"
import Navbar from "./components/Navbar";
import MainContent from "./components/MainComponent";
import Cursor from "./components/Cursor";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ProjectVolta from "./components/services/ProjectVolta";
import HamburgHammerbrook from "./components/services/HamburgHammerbrook";
import LinzLeonding from "./components/services/LinzLeonding";
import HamburgAltona from "./components/services/HamburgAltona";
import ILiveRiocaVienna from "./components/services/iLiveRiocaVienna";
import CroatiaOmisRuskamen from "./components/services/CroatiaOmisRuskamen";
import ARCOTELRubinHamburg from "./components/services/ARCOTELRubinHamburg";
import ARCOTELOnyxHamburg from "./components/services/ARCOTELOnyxHamburg";
import ARCOTELKaiserwasserVienna from "./components/services/ARCOTELKaiserwasserVienna";
import ARCOTELCaminoStuttgart from "./components/services/ARCOTELCaminoStuttgart";
import ARCOTELAllegraZagreb from "./components/services/ARCOTELAllegraZagreb";
import ExcelsiorPyramidFürth from "./components/services/ExcelsiorPyramidFurth";
import ExcelsiorPyramidFurth from "./components/services/ExcelsiorPyramidFurth";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Impressum from "./components/Impressum";
import { LanguageProvider } from "./context/LanguageContext";
import Services2 from "./components/Services2";
import RedirectComponent from "./components/RedirectComponent";

function App() {
  useEffect(() => {
    // Helper function to load a script with a promise to enforce order
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          console.log(`${src} already loaded`);
          resolve(); // Script already loaded, move to next one
          return;
        }

        // const timestamp = new Date().getTime(); // Generate a timestamp
        // const cacheBustedSrc = `${src}?v=${timestamp}`; // Add cache-busting query
        // // console.log(cacheBustedSrc)
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => {
          console.log(`${src} loaded`);
          resolve(); // Resolve the promise after loading
        };
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load scripts in sequence using async/await
    async function loadScriptsInOrder() {
      try {
        await loadScript("/assets/js/jquery-3.1.1.min.js");
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineLite.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/ScrollToPlugin.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
        );
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"
        );
        await loadScript("/assets/js/plugins.js");
        await loadScript("/assets/js/dsn-grid.js");
        await loadScript("/assets/js/custom.js");
      } catch (error) {
        console.error("Error loading scripts in order:", error);
      }
    }

    loadScriptsInOrder(); // Start loading scripts
  }, []);

  // function LanguageWrapper({ children }) {
  //   const { lang } = useParams(); // Extract lang from the route
  //   console.log("in App.js Param Lang: ", lang)
  //   return <LanguageProvider lang={lang}>{children}</LanguageProvider>; // Pass lang as prop
  // }

  const getLanguageFromPath = () => {
    const path = window.location.pathname.split("/")[1];
    return ["en", "de", "hr"].includes(path) ? path : "en";
  };

  return (
    <Router>
      <LanguageProvider lang={getLanguageFromPath()}>
        <div data-dsn-temp="light"></div>
        {/* <Preloader /> */}
        <Routes>
          <Route path="/" element={<RedirectComponent/>} />
          <Route path="/:lang/" element={<MainContent />} />
          <Route path="/:lang/about" element={<About />} />
          <Route path="/:lang/projects" element={<Services />} />
          <Route path="/:lang/contact" element={<Contact />} />
          <Route path="/:lang/project-volta" element={<ProjectVolta />} />
          <Route
            path="/:lang/hamburg-hammerbrook"
            element={<HamburgHammerbrook />}
          />
          <Route path="/:lang/linz-leonding" element={<LinzLeonding />} />
          <Route path="/:lang/hamburg-altona" element={<HamburgAltona />} />
          <Route
            path="/:lang/ilive-rioca-vienna"
            element={<ILiveRiocaVienna />}
          />
          <Route
            path="/:lang/excelsior-pyramid-fürth"
            element={<ExcelsiorPyramidFurth />}
          />
          <Route
            path="/:lang/croatia-omis-ruskamen"
            element={<CroatiaOmisRuskamen />}
          />
          <Route
            path="/:lang/arcotel-rubin-hamburg"
            element={<ARCOTELRubinHamburg />}
          />
          <Route
            path="/:lang/arcotel-onyx-hamburg"
            element={<ARCOTELOnyxHamburg />}
          />
          <Route
            path="/:lang/arcotel-kaiserwasser-vienna"
            element={<ARCOTELKaiserwasserVienna />}
          />
          <Route
            path="/:lang/arcotel-camino-stuttgart"
            element={<ARCOTELCaminoStuttgart />}
          />
          <Route
            path="/:lang/arcotel-allergra-zagreb"
            element={<ARCOTELAllegraZagreb />}
          />
          <Route path="/:lang/services" element={<Services2 />} />
          <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/:lang/imprint" element={<Impressum />} />
        </Routes>

        <Cursor />
      </LanguageProvider>
      {/* <WaitLoader /> */}
    </Router>
  );
}

export default App;
