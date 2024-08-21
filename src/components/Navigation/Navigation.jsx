import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
const Navigation = () => {
    const buildLinkClass = ({ isActive }) => {
      return clsx(css.link, isActive && css.active);
    };
  return (
    <header className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/Movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation
