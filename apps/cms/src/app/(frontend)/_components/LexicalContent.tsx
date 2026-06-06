import type { ComponentProps, ReactNode } from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { colorCss } from "@/textStateColors";

type RichTextProps = ComponentProps<typeof RichText>;
type RichTextData = RichTextProps["data"];

// Masques de format inline lexical.
const IS_BOLD = 1;
const IS_ITALIC = 1 << 1;
const IS_STRIKETHROUGH = 1 << 2;
const IS_UNDERLINE = 1 << 3;
const IS_CODE = 1 << 4;

/**
 * Convertisseur texte custom : marques natives (gras/italique/…) + couleur inline
 * issue du TextStateFeature (stockée sur `node.$.color`, cf. textStateColors).
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const textConverter = ({ node }: { node: any }): ReactNode => {
  let el: ReactNode = node.text;
  const format: number = node.format ?? 0;

  if (format & IS_BOLD) el = <strong>{el}</strong>;
  if (format & IS_ITALIC) el = <em>{el}</em>;
  if (format & IS_UNDERLINE)
    el = <span style={{ textDecoration: "underline" }}>{el}</span>;
  if (format & IS_STRIKETHROUGH)
    el = <span style={{ textDecoration: "line-through" }}>{el}</span>;
  if (format & IS_CODE) el = <code>{el}</code>;

  const color: string | undefined = node.$?.color;
  if (color && colorCss[color]) {
    el = <span style={{ color: colorCss[color] }}>{el}</span>;
  }
  return el;
};

const converters: RichTextProps["converters"] = ({ defaultConverters }) => ({
  ...defaultConverters,
  text: textConverter,
});

/**
 * Rend un champ richText lexical de Payload (gras, couleurs accent/atténué).
 * Renvoie null si le champ est vide.
 */
export default function LexicalContent({ data }: { data?: unknown }) {
  if (!data) return null;
  return <RichText data={data as RichTextData} converters={converters} />;
}
