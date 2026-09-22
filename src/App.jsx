import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/navbar/Navbar";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import SecondBrain from "./pages/SecondBrain";
import FakeNewsDetection from "./pages/FakeNewsDetection";
import SalesDashboard from "./pages/SalesDashboard";
import AIShop from "./pages/AIShop";
import HeartDisease from "./pages/HeartDisease";
import AnimalDetection from "./pages/AnimalDetection";
import ZanfaBites from "./pages/ZanfaBites";


// ========================================
// SCROLL TO TOP ON ROUTE CHANGE
// ========================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}


// ========================================
// MAIN PORTFOLIO HOME
// ========================================

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}


// ========================================
// APP
// ========================================

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* ========================================
            MAIN PORTFOLIO
        ======================================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ========================================
            PROJECT 1 — SECOND BRAIN
        ======================================== */}

        <Route
          path="/projects/second-brain"
          element={
            <>
              <Navbar />
              <SecondBrain />
            </>
          }
        />


        {/* ========================================
            PROJECT 2 — FAKE NEWS DETECTION
        ======================================== */}

        <Route
          path="/projects/fake-news-detection"
          element={
            <>
              <Navbar />
              <FakeNewsDetection />
            </>
          }
        />


        {/* ========================================
            PROJECT 3 — SALES DASHBOARD
        ======================================== */}

        <Route
          path="/projects/sales-dashboard"
          element={
            <>
              <Navbar />
              <SalesDashboard />
            </>
          }
        />


        {/* ========================================
            PROJECT 4 — AI SHOP
        ======================================== */}

        <Route
          path="/projects/ai-shop"
          element={
            <>
              <Navbar />
              <AIShop />
            </>
          }
        />


        {/* ========================================
            PROJECT 5 — HEART DISEASE
        ======================================== */}

        <Route
          path="/projects/heart-disease"
          element={
            <>
              <Navbar />
              <HeartDisease />
            </>
          }
        />


        {/* ========================================
            PROJECT 6 — ANIMAL DETECTION
        ======================================== */}

        <Route
          path="/projects/animal-detection"
          element={
            <>
              <Navbar />
              <AnimalDetection />
            </>
          }
        />


        {/* ========================================
            PROJECT 7 — ZANFA BITES
        ======================================== */}

        <Route
          path="/projects/zanfa-bites"
          element={
            <>
              <Navbar />
              <ZanfaBites />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;