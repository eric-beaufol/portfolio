import type { Media } from "@/payload-types";
import CaseVisual from "./CaseVisual";
import styles from "./Case.module.css";

type CaseGalleryProps = {
  images: Media[];
  /** Slug du projet, pour les légendes des placeholders si pas d'images. */
  slug: string;
};

/**
 * Galerie : 1 visuel large (1er, pleine largeur via CSS) + le reste en demi.
 * Si aucune image n'est uploadée, affiche 3 placeholders rayés.
 */
export default function CaseGallery({ images, slug }: CaseGalleryProps) {
  const hasImages = images.length > 0;
  const items = hasImages
    ? images.map((media, i) => ({ media, label: media.alt || `${slug}-${i + 1}` }))
    : [1, 2, 3].map((n) => ({
        media: null as Media | null,
        label: `aperçu — ${slug}-0${n}.png`,
      }));

  return (
    <div className={`${styles.gallery} reveal`}>
      {items.map((item, i) => (
        <CaseVisual
          key={i}
          label={item.label}
          media={item.media}
          tall={i > 0}
          sizes={i === 0 ? "100vw" : "(max-width: 760px) 100vw, 50vw"}
        />
      ))}
    </div>
  );
}
