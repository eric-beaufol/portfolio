import styles from "./Case.module.css";

type CaseListProps = {
  items: string[];
  /** "numbered" → 01/02/03 ; "arrow" → ↳ */
  variant: "numbered" | "arrow";
};

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function CaseList({ items, variant }: CaseListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i}>
          <span className={styles.n}>
            {variant === "numbered" ? pad2(i + 1) : "↳"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
