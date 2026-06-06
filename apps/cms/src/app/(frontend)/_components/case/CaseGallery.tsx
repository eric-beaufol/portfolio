import CaseVisual from "./CaseVisual";
import styles from "./Case.module.css";

/** Galerie : 1 visuel large + 2 demi (le 1er prend toute la largeur). */
export default function CaseGallery({ labels }: { labels: string[] }) {
  return (
    <div className={`${styles.gallery} reveal`}>
      {labels.map((label, i) => (
        <CaseVisual key={i} label={label} tall={i > 0} />
      ))}
    </div>
  );
}
