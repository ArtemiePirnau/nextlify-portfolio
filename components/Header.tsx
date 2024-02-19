import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitcher";
export default function Header() {
  return (
    <header className="header">
      <div className="header__inner w-full">
        <Link href="/">
          <Image
            src="https://github.com/ArtemiePirnau/nextjs-portfolio/blob/main/public/logo.png?raw=true"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
}
