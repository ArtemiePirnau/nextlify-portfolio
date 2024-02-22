"use client";

import { useEffect } from "react";
import ProjectsItem from "./ProjectsItem";
import { HTMLProjectsProps } from "@/types";
export default function Projects({ projectsHTML }: HTMLProjectsProps) {
  return (
    <div className="projects">
      <h3 className="portfolio__title section-title">Portfolio</h3>
      <div className="portfolio__inner">
        <p className="portfolio__text section-text">Some of my works</p>
        <div className="portfolio__tabs">
          <button
            className="portfolio__tab text portfolio__tab-websites "
            data-filter=".websites"
          >
            HTML/CSS
            <span></span>
          </button>
          <button className="portfolio__tab text" data-filter=".apps">
            JavaScript
            <span></span>
          </button>
          <button className="portfolio__tab text" data-filter=".react">
            React
            <span></span>
          </button>
        </div>
        <div className="portfolio__items-wrapper">
          <div className="portfolio__items mix websites flex flex-wrap justify-between">
            {projectsHTML.map((item) => {
              return (
                <ProjectsItem id={item.id} img={item.img} link={item.link} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
