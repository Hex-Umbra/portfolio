import React from "react";
import Section from "../components/Section.jsx";
import InfoSection from "../components/InfoSection.jsx";
import Formations from "../components/Formations.jsx";
import ProjectSection from "../components/ProjectSection.jsx";

export default function Home() {
  return (
    <>
      <Section />
      <InfoSection />
      <Formations/>
      <ProjectSection/>
    </>
  );
}
