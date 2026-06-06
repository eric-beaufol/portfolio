import { marqueeItems } from "../_data/site";
import styles from "./Marquee.module.css";

export default function Marquee() {
  // Contenu dupliqué pour une boucle sans couture (translateX(-50%)).
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
