import { Button } from "@/components/ui/button";
import Projects from "@/components/Projects";
import { projectsHTML, projectsJS, projectsReact } from "@/data";
export default function Home() {
  console.log(projectsHTML);

  return (
    <section className="wrapper w-full">
      <div className="about">
        <h4 className="about__title text-4xl uppercase font-bold text-center mb-5">
          About
        </h4>
        <p className="about__text text-center uppercase text-lg mb-10">
          Let's get acquainted closer
        </p>
        <div className="about__box flex justify-between w-full">
          <p className="about__box-descr w-1/2 text-sm leading-7">
            <span className="block mb-3 text-[#36a8b3]">
              I'm a design-minded, detail oriented software engineer passionate
              about combining beautiful code with beautiful design.
            </span>
            I love learning new and better ways to create seamless user
            experiences with clean, efficient, and scalable code. I consider
            work an ongoing education, and I'm always looking for opportunities
            to work with those who are willing to share their knowledge as much
            as I want to learn. At the end of the day, my primary goal is to
            create something beautiful with people that bring out the best in
            me.
          </p>
          <div className="about__personal">
            <h6 className="uppercase text-lg mb-10">Personal information</h6>
            <p className="font-bold">Full name:</p>
            <p className="mb-2">Pirnau Artemie</p>
            <p className="font-bold">Date of birth</p>
            <p className="mb-2">06.07.2004</p>
            <p className="font-bold">E-mail:</p>
            <a href="mailto:artemiepirnau@gmail.com">artemiepirnau@gmail.com</a>
          </div>
        </div>
      </div>
      <Projects projectsHTML={projectsHTML} />
    </section>
  );
}

// import { Button } from "@/components/ui/button";
// import Projects from "@/components/Projects";
// import { HTMLProjectsProps } from "@/types";
// // import { projectsHTML, projectsJS, projectsReact } from "@/data";
// const Home: React.FC<HTMLProjectsProps> = ({ projectsHTML }) => {
//   console.log(projectsHTML);

//   return (
//     <section className="wrapper w-full">
//       <div className="about">
//         <h4 className="about__title text-4xl uppercase font-bold text-center mb-5">
//           About
//         </h4>
//         <p className="about__text text-center uppercase text-lg mb-10">
//           Let's get acquainted closer
//         </p>
//         <div className="about__box flex justify-between w-full">
//           <p className="about__box-descr w-1/2 text-sm leading-7">
//             <span className="block mb-3 text-[#36a8b3]">
//               I'm a design-minded, detail oriented software engineer passionate
//               about combining beautiful code with beautiful design.
//             </span>
//             I love learning new and better ways to create seamless user
//             experiences with clean, efficient, and scalable code. I consider
//             work an ongoing education, and I'm always looking for opportunities
//             to work with those who are willing to share their knowledge as much
//             as I want to learn. At the end of the day, my primary goal is to
//             create something beautiful with people that bring out the best in
//             me.
//           </p>
//           <div className="about__personal">
//             <h6 className="uppercase text-lg mb-10">Personal information</h6>
//             <p className="font-bold">Full name:</p>
//             <p className="mb-2">Pirnau Artemie</p>
//             <p className="font-bold">Date of birth</p>
//             <p className="mb-2">06.07.2004</p>
//             <p className="font-bold">E-mail:</p>
//             <a href="mailto:artemiepirnau@gmail.com">artemiepirnau@gmail.com</a>
//           </div>
//         </div>
//       </div>
//       <Projects projectsHTML={projectsHTML} />
//     </section>
//   );
// };
// export default Home;
