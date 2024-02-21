import React from "react";
import { ItemProps } from "@/types";
export default function ProjectsItem({ id, img, link }: ItemProps) {
  return (
    <a
      key={id}
      className="portfolio__item"
      target="_blank"
      href={link}
      style={{ backgroundImage: `url(${img})` }}
    ></a>
  );
}
