import styles from "./Case.module.css";

type CaseVisualProps = {
  label: string;
  tall?: boolean;
  reveal?: boolean;
};

/** Placeholder visuel rayé (à remplacer par une vraie capture). */
export default function CaseVisual({ label, tall, reveal }: CaseVisualProps) {
  return (
    <div
      className={`${styles.visual} ${tall ? styles.tall : ""} ${
        reveal ? "reveal" : ""
      }`}
      data-cursor
    >
      <span>{label}</span>
    </div>
  );
}
