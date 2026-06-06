import { getPayload } from 'payload'
import Link from 'next/link'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const adminPath = payloadConfig.routes.admin

  let projectsCount = 0
  try {
    const result = await payload.count({ collection: 'projects' })
    projectsCount = result.totalDocs
  } catch {
    projectsCount = 0
  }

  return (
    <div className="landing">
      <div className="card">
        <h1>Portfolio 2026 — CMS</h1>
        <p>
          Back-office Payload. {projectsCount} projet{projectsCount > 1 ? 's' : ''} en base.
        </p>
        <Link href={adminPath} className="cta">
          Accéder à l'admin →
        </Link>
      </div>
    </div>
  )
}
