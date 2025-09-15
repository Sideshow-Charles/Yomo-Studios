import Logo from '../assets/images/logo-001.png'
import Image from "next/image";
import '../../app/assets/styles/components/header.scss';
import Link from "next/link";

export default function Header() {
  return (
    <div>
        <nav className="header">
          <ul className="header__items">
            <Link href="/" passHref><li className="header__item"> <Image src={Logo} alt="Logo" width={100}/></li></Link>
            <li className="header__item">About</li>
            <li className="header__item">Blog</li>
            <li className="header__item">Shop</li>
            <li className="header__item">Events</li>
            <li className="header__item">Contact</li>
            <li className="header__item">Support</li>
          </ul>
        </nav>
    </div>
  );
}