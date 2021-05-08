import logoImg from "../../assets/logo.svg";

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

        <section>
          <div>
            <i className="fa fa-search fa-lg"></i>
          </div>
          <div>
            <i className="fa fa-shopping-cart fa-lg"></i>
          </div>
          <div>
            <i className="fa fa-bars fa-lg"></i>
          </div>
        </section>
      </div>
    </header>
  );
}
