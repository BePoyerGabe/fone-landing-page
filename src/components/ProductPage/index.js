import styles from "./styles.module.css";
import ProductImg from "../../assets/fone.png";

export function ProductPage() {
  return (
    <main>
      <img src={ProductImg} alt="Headphone" />

      <section>
        <h2>Hyper x on-ear</h2>
        <p>Wireless over-ear headphones</p>

        <div className={styles.ratingSection}>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fas fa-star-half"></i>
          </span>
          <span>4.2 (335)</span>
        </div>

        <div className={styles.infoProduct}>
          <p>Driver unit</p>
          <span>70mm. dome type (CCAW Voice Col)</span>
        </div>

        <div className={styles.infoProduct}>
          <p>Frequency Response</p>
          <span>4 Hz + 100.000Hz</span>
        </div>

        <div className={styles.cartContainer}>
          <span>
            <sup>$</sup>89.99
          </span>
          <button type="button">Add to cart</button>
        </div>
      </section>
    </main>
  );
}
