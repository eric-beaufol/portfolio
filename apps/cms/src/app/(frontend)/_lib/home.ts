import { getPayload } from "payload";
import configPromise from "@payload-config";
import type { Home } from "@/payload-types";

/** Contenu éditable de la page d'accueil (Global Payload). */
export async function getHome(): Promise<Home> {
  const payload = await getPayload({ config: configPromise });
  return payload.findGlobal({ slug: "home", depth: 1 });
}
