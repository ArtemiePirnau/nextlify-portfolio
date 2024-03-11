import Image from "next/image";
import HeaderTop from "@/components/Header/HeaderTop";
import Contact from "@/components/Contact";
export default function Contacts() {
  return (
    <div className="mb-44">
      <HeaderTop />

      <div className="flex justify-between items-center">
        <div>
          <p className="text-3xl text-[#36a8b3] mb-10">Hello 👋</p>
          <h3 className="text-7xl inline-block font-extrabold mb-10">
            Let's work <br /> together
          </h3>
          <p className="font-extralight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
            mollitia.
          </p>
        </div>
        <Image src="/contacts.svg" width={450} height={450} alt="contacts" />
      </div>
      <Contact />
    </div>
  );
}
