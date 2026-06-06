import type { ComponentProps } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";

type RichTextData = ComponentProps<typeof RichText>["data"];

/**
 * Rend un champ richText lexical de Payload. Les marques (gras → <strong>, etc.)
 * sont stylées par le CSS du bloc parent (cf. Case.module.css `.body`).
 * Renvoie null si le champ est vide.
 */
export default function LexicalContent({ data }: { data?: unknown }) {
  if (!data) return null;
  return <RichText data={data as RichTextData} />;
}
