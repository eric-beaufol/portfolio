/**
 * Extrait le texte brut d'un champ richText lexical (pour les meta descriptions).
 * Parcourt récursivement les nœuds et concatène les `text`.
 */
export function lexicalToPlainText(data?: unknown): string {
  if (!data || typeof data !== "object") return "";
  const root = (data as { root?: { children?: unknown[] } }).root;
  if (!root?.children) return "";

  const walk = (nodes: unknown[]): string =>
    nodes
      .map((n) => {
        const node = n as {
          type?: string;
          text?: string;
          children?: unknown[];
        };
        if (node.type === "text") return node.text ?? "";
        if (node.children) return walk(node.children);
        return "";
      })
      .join("");

  return walk(root.children).replace(/\s+/g, " ").trim();
}
