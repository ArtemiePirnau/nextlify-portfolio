"use client";

import FilterButtons from "./FilterButtons";
import { data } from "@/data";
import { useState } from "react";
import { projectsHTML, projectsJS, projectsReact } from "@/data";
export default function Projects() {
  return (
    <div className="projects mb-60">
      <h3 className="portfolio__title section-title text-4xl uppercase font-bold text-center mb-5">
        Portfolio
      </h3>
      <div className="portfolio__inner">
        <p className="portfolio__text section-text text-center uppercase text-lg mb-10">
          Some of my works
        </p>
        <FilterButtons />
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
        <div className="portfolio__items mix websites flex flex-wrap">
          {projectsHTML.map((item) => {
            return (
              <ProjectsItem key={item.id} img={item.img} link={item.link} />
            );
          })}
        </div>
        <div className="portfolio__items mix apps flex flex-wrap">
          {projectsJS.map((item) => {
            return (
              <ProjectsItem key={item.id} img={item.img} link={item.link} />
            );
          })}
        </div>
        <div className="portfolio__items mix react flex flex-wrap">
          {projectsReact.map((item) => {
            return (
              <ProjectsItem key={item.id} img={item.img} link={item.link} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
// TODO: De gasit o alternativa la mixitup sau de facut singur
