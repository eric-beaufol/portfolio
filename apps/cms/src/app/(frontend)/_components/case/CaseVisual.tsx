import Image from "next/image";
import type { Media } from "@/payload-types";
import styles from "./Case.module.css";

type CaseVisualProps = {
  /** Légende du placeholder (utilisée si aucune image). */
  label: string;
  media?: Media | null;
  tall?: boolean;
  reveal?: boolean;
  sizes?: string;
};

/** Visuel : vraie image si fournie, sinon placeholder rayé. */
export default function CaseVisual({
  label,
  media,
  tall,
  reveal,
  sizes = "100vw",
}: CaseVisualProps) {
  return (
    <div
      className={`${styles.visual} ${tall ? styles.tall : ""} ${
        reveal ? "reveal" : ""
      }`}
      data-cursor
    >
      {media?.url ? (
        <Image
          src={media.url}
          alt={media.alt || label}
          fill
          sizes={sizes}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}
