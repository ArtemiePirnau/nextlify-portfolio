export interface ItemProps {
  id: number;
  img: string;
  link: string;
}
export interface ProjectsProps {
  projectsHTML: ItemProps[];
  projectsReact: ItemProps[];
  projectsJS: ItemProps[];
}
// export interface HTMLProjectsProps {
//   projectsHTML: ItemProps[];
// }
// export interface JSProjectsProps {
//   projectsJS: ItemProps[];
// }
