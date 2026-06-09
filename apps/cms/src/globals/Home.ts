import type { GlobalConfig } from 'payload'

/**
 * Contenu éditable de la page d'accueil (singleton).
 * Les libellés structurels (eyebrows, titres de section) y sont inclus pour être
 * éditables. Les champs richText (hero.lead, about.body) supportent le gras et
 * les couleurs accent/atténué (TextStateFeature, cf. payload.config).
 */
export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Accueil',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Identité',
          fields: [
            {
              name: 'identity',
              type: 'group',
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'role', type: 'text' },
                {
                  type: 'row',
                  fields: [
                    { name: 'brand', type: 'text', admin: { description: 'Sigle nav, ex. « EB ».' } },
                    { name: 'brandSuffix', type: 'text', admin: { description: 'ex. « .dev ».' } },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'location', type: 'text' },
                    { name: 'year', type: 'text' },
                    { name: 'email', type: 'email' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                { name: 'status', type: 'text' },
                { name: 'titleLine1', type: 'text', admin: { description: 'Par défaut : le nom.' } },
                {
                  type: 'row',
                  fields: [
                    { name: 'titleOutline', type: 'text', admin: { description: 'Mot en contour, ex. « Frontend ».' } },
                    { name: 'titleAccent', type: 'text', admin: { description: 'Mot en accent, ex. « Senior ».' } },
                  ],
                },
                {
                  name: 'lead',
                  type: 'richText',
                  admin: { description: 'Accroche. Gras + couleurs accent/atténué disponibles.' },
                },
                { name: 'scrollLabel', type: 'text', defaultValue: 'Scroll' },
              ],
            },
            {
              name: 'marquee',
              type: 'array',
              label: 'Bandeau défilant',
              labels: { singular: 'Élément', plural: 'Éléments' },
              fields: [{ name: 'item', type: 'text', required: true }],
            },
          ],
        },
        {
          label: 'À propos',
          fields: [
            {
              name: 'about',
              type: 'group',
              fields: [
                { name: 'eyebrow', type: 'text' },
                {
                  name: 'body',
                  type: 'richText',
                  admin: { description: 'Paragraphes. Gras + couleurs accent/atténué disponibles.' },
                },
                {
                  name: 'stats',
                  type: 'array',
                  labels: { singular: 'Stat', plural: 'Stats' },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        { name: 'value', type: 'text', required: true },
                        { name: 'suffix', type: 'text' },
                      ],
                    },
                    { name: 'label', type: 'text', required: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Sections',
          fields: [
            {
              name: 'projects',
              type: 'group',
              label: 'Section Projets',
              fields: [
                { name: 'eyebrow', type: 'text' },
                { name: 'title', type: 'text' },
              ],
            },
            {
              name: 'experience',
              type: 'group',
              label: 'Parcours',
              fields: [
                { name: 'eyebrow', type: 'text' },
                { name: 'title', type: 'text' },
                {
                  name: 'items',
                  type: 'array',
                  labels: { singular: 'Expérience', plural: 'Expériences' },
                  fields: [
                    { name: 'period', type: 'text' },
                    {
                      type: 'row',
                      fields: [
                        { name: 'role', type: 'text' },
                        { name: 'company', type: 'text' },
                      ],
                    },
                    {
                      name: 'points',
                      type: 'array',
                      labels: { singular: 'Réalisation', plural: 'Réalisations' },
                      fields: [{ name: 'text', type: 'textarea', required: true }],
                    },
                  ],
                },
              ],
            },
            {
              name: 'stack',
              type: 'group',
              label: 'Stack technique',
              fields: [
                { name: 'eyebrow', type: 'text' },
                { name: 'title', type: 'text' },
                {
                  name: 'cards',
                  type: 'array',
                  labels: { singular: 'Carte', plural: 'Cartes' },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        { name: 'n', type: 'text', admin: { description: 'ex. « /A ».' } },
                        { name: 'category', type: 'text', required: true },
                      ],
                    },
                    {
                      name: 'skills',
                      type: 'array',
                      labels: { singular: 'Compétence', plural: 'Compétences' },
                      fields: [
                        {
                          type: 'row',
                          fields: [
                            { name: 'name', type: 'text', required: true },
                            { name: 'level', type: 'text' },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Contact & footer',
          fields: [
            {
              name: 'contact',
              type: 'group',
              fields: [
                { name: 'eyebrow', type: 'text' },
                {
                  name: 'lines',
                  type: 'array',
                  label: 'Lignes du titre',
                  labels: { singular: 'Ligne', plural: 'Lignes' },
                  fields: [{ name: 'text', type: 'text', required: true }],
                },
                { name: 'linkText', type: 'text', admin: { description: 'ex. « ensemble ↗ ».' } },
                { name: 'sub', type: 'text' },
                {
                  name: 'links',
                  type: 'array',
                  labels: { singular: 'Lien', plural: 'Liens' },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        { name: 'label', type: 'text', required: true },
                        { name: 'href', type: 'text', required: true },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'footer',
              type: 'group',
              fields: [
                { name: 'copyright', type: 'text' },
                { name: 'tagline', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
