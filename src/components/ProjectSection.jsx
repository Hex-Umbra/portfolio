import React, { useState } from "react";
import ProjectFetching from "./ProjectFetching";

export default function ProjectSection() {

  return (
    <section className="md:secondary-section bg-slate-950 md:p-10 flex flex-wrap gap-2 justify-around">
      <ProjectFetching/>
    </section>
  );
}
