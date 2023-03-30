//importaciones
import Link from "next/link";
import style from '../components/Header.module.css'

//Arreglo que contiene los links del nav
const links = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "About",
      route: "/about",
    },
    {
      label: "Posts",
      route: "/posts",
    },
  ];

//funcion que renderiza el header
  export function Header(){
    return (
        <header className={style.header}>
        <nav>
          <ul className={style.navigation}>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }