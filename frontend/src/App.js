import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import SportsSection from "./components/SportsSection";
import ExperienceSection from "./components/ExperienceSection";
import JourneySection from "./components/JourneySection";
import TravelGoalsSection from "./components/TravelGoalsSection";
import FarewellSection from "./components/FarewellSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SportsSection />
        <ExperienceSection />
        <JourneySection />
        <TravelGoalsSection />
        <FarewellSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
