import logoImg from "../../assets/logo.svg";
import { FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";

import styles from "./header.module.css";

export function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src={logoImg} alt="GShop" />

        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>

        <section className="menus">
          <span>
            <FaSearch color="var(--gray)" />
          </span>
          <span>
            <FaShoppingCart color="var(--gray)" />
          </span>
          <span>
            <FaBars color="var(--gray)" />
          </span>
        </section>
      </div>
    </header>
  );
}
