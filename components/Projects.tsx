"use client";

import { useEffect } from "react";
import mixitup from "mixitup";
import ProjectsItem from "./ProjectsItem";
import { ProjectsProps } from "@/types";
export default function Projects({
  projectsHTML,
  projectsJS,
  projectsReact,
}: ProjectsProps) {
  useEffect(() => {
    mixitup(".portfolio__items-wrapper", {
      selectors: {
        target: ".websites, .apps, .react",
      },
      animation: {
        duration: 800,
      },
    });
  }, []);
  return (
    <div className="projects">
      <h3 className="portfolio__title section-title text-4xl uppercase font-bold text-center mb-5">
        Portfolio
      </h3>
      <div className="portfolio__inner">
        <p className="portfolio__text section-text text-center uppercase text-lg mb-10">
          Some of my works
        </p>
        <div className="portfolio__tabs text-center uppercase text-lg mb-10">
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
          <div className="portfolio__items mix websites flex flex-wrap">
            {projectsHTML.map((item) => {
              return (
                <ProjectsItem id={item.id} img={item.img} link={item.link} />
              );
            })}
          </div>
          <div className="portfolio__items mix apps flex flex-wrap">
            {projectsJS.map((item) => {
              return (
                <ProjectsItem id={item.id} img={item.img} link={item.link} />
              );
            })}
          </div>
          <div className="portfolio__items mix react flex flex-wrap">
            {projectsReact.map((item) => {
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
