import Link from "next/link";
import ThemeSwitch from "../ThemeSwitcher";
import Image from "next/image";
export default function HeaderTop() {
  return (
    <div className="header__top">
      <Link href="/">
        <Image
          priority
          src="https://github.com/ArtemiePirnau/nextjs-portfolio/blob/main/public/logo.png?raw=true"
          alt="logo"
          width={70}
          height={70}
        />
      </Link>
      <Link className="ml-auto mr-24" href="/contacts">
        Contacts
      </Link>
      <ThemeSwitch />
    </div>
  );
}
