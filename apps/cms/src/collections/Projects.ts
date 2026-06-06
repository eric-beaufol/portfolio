import type { CollectionBeforeValidateHook, CollectionConfig } from 'payload'

/**
 * Champ optionnel en base (brouillons), mais obligatoire lorsque le projet est
 * publié. Typage des paramètres en `any` pour rester compatible text & textarea.
 */
const requiredWhenPublished = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { data }: { data?: any },
): true | string => {
  if (data?.status === 'published' && (!value || String(value).trim() === '')) {
    return 'Ce champ est requis pour publier le projet.'
  }
  return true
}

const slugify = (input: string): string =>
  input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

const generateSlugFromTitle: CollectionBeforeValidateHook = ({ data, originalDoc }) => {
  if (!data) return data
  if (data.slug && data.slug.length > 0) return data
  const source = data.title ?? originalDoc?.title
  if (!source) return data
  return { ...data, slug: slugify(source) }
}

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'order', 'updatedAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        status: { equals: 'published' },
      }
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    beforeValidate: [generateSlugFromTitle],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-généré depuis le titre si laissé vide.',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: "Ordre d'affichage (croissant) sur l'accueil et pour « projet suivant ».",
      },
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'yyyy-MM-dd',
        },
        description: 'Date de réalisation du projet.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Présentation',
          fields: [
            {
              name: 'category',
              type: 'text',
              // Nullable en base (brouillons), mais obligatoire pour publier.
              validate: requiredWhenPublished,
              admin: { description: 'Eyebrow mono, ex. « SaaS · Data-viz ». Requis pour publier.' },
            },
            {
              name: 'lead',
              type: 'textarea',
              validate: requiredWhenPublished,
              admin: {
                description: 'Accroche affichée sous le titre du case study. Requis pour publier.',
              },
            },
            {
              name: 'cardDescription',
              type: 'textarea',
              admin: { description: "Description courte de la ligne projet sur l'accueil." },
            },
            {
              name: 'technologies',
              type: 'array',
              labels: { singular: 'Tag', plural: 'Tags' },
              admin: { description: 'Tags affichés sur l’accueil et dans la meta strip « Stack ».' },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'meta',
              type: 'group',
              label: 'Meta strip',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'role', type: 'text' },
                    { name: 'year', type: 'text', admin: { description: 'Texte libre, ex. « 2022 — 24 ».' } },
                    { name: 'duration', type: 'text', admin: { description: 'Texte libre, ex. « En continu ».' } },
                  ],
                },
              ],
            },
            {
              name: 'cover',
              type: 'upload',
              relationTo: 'media',
              admin: { description: 'Visuel hero. Si vide, un placeholder rayé est affiché.' },
            },
            {
              name: 'gallery',
              type: 'array',
              labels: { singular: 'Image', plural: 'Images' },
              admin: { description: 'Galerie (1 large + le reste). Si vide, placeholders rayés.' },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Étude de cas',
          fields: [
            {
              name: 'context',
              type: 'group',
              label: 'Contexte',
              fields: [
                { name: 'heading', type: 'text' },
                { name: 'body', type: 'richText' },
              ],
            },
            {
              name: 'challenge',
              type: 'group',
              label: 'Le défi',
              fields: [
                { name: 'heading', type: 'text' },
                {
                  name: 'items',
                  type: 'array',
                  labels: { singular: 'Point', plural: 'Points' },
                  admin: { description: 'Liste numérotée (01, 02, 03…).' },
                  fields: [{ name: 'text', type: 'textarea', required: true }],
                },
              ],
            },
            {
              name: 'approach',
              type: 'group',
              label: "L'approche",
              fields: [
                { name: 'heading', type: 'text' },
                { name: 'body', type: 'richText' },
                {
                  name: 'points',
                  type: 'array',
                  labels: { singular: 'Point', plural: 'Points' },
                  admin: { description: 'Liste à puces ↳.' },
                  fields: [{ name: 'text', type: 'textarea', required: true }],
                },
              ],
            },
            {
              name: 'results',
              type: 'group',
              label: 'Résultats',
              fields: [
                { name: 'heading', type: 'text' },
                {
                  name: 'stats',
                  type: 'array',
                  labels: { singular: 'Stat', plural: 'Stats' },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'value',
                          type: 'text',
                          required: true,
                          admin: { description: 'Valeur du compteur, décimales avec « . » (ex. « 2.1 »).' },
                        },
                        {
                          name: 'suffix',
                          type: 'text',
                          admin: { description: 'Suffixe accentué (%, +, fps, s…).' },
                        },
                      ],
                    },
                    { name: 'caption', type: 'text', required: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Autres',
          fields: [
            {
              name: 'description',
              type: 'richText',
              admin: { description: 'Champ libre (non affiché par le thème actuel).' },
            },
            {
              name: 'links',
              type: 'array',
              labels: { singular: 'Lien', plural: 'Liens' },
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'url', type: 'text', required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
}
