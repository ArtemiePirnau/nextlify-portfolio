import React from "react";
import Link from "next/link";
import { ItemProps } from "@/types";
export default function ProjectsItem({ id, img, link, title }: ItemProps) {
  console.log(id);

  return (
    <Link className="box " href={link} key={id}>
      <div
        className="rounded-md portfolio__item w-[450px] h-80 bg-center bg-no-repeat bg-cover my-4 mx-2"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <p className="text-2xl">{title}</p>
    </Link>
  );
}
// TODO: De adaugat style pentr elementele primite si sa fie pe pagina
