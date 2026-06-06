import type { Home } from "@/payload-types";
import styles from "./Marquee.module.css";

export default function Marquee({ items }: { items: Home["marquee"] }) {
  const list = (items ?? []).map((m) => m.item);
  if (list.length === 0) return null;
  // Contenu dupliqué pour une boucle sans couture (translateX(-50%)).
  const doubled = [...list, ...list];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
