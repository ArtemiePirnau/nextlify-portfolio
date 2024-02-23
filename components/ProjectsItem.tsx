import React from "react";
import Link from "next/link";
import { ItemProps } from "@/types";
export default function ProjectsItem({ id, img, link }: ItemProps) {
  return (
    <Link href={link} key={id}>
      <div
        className="portfolio__item w-[450px] h-80 bg-center bg-no-repeat bg-cover my-2 mx-2"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </Link>
  );
}
// TODO: De adaugat style pentr elementele primite si sa fie pe pagina
