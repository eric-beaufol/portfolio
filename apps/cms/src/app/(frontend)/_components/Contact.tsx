import React from "react";
import type { Home } from "@/payload-types";
import styles from "./Contact.module.css";

type ContactProps = {
  contact: Home["contact"];
  email?: string | null;
};

export default function Contact({ contact, email }: ContactProps) {
  const mailto = email ? `mailto:${email}` : "#";
  const lines = contact?.lines ?? [];
  const links = contact?.links ?? [];

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="wrap">
        <span className={`eyebrow reveal ${styles.eyebrow}`}>
          {contact?.eyebrow}
        </span>
        <h2 className={`${styles.big} reveal`}>
          {lines.map((line) => (
            <React.Fragment key={line.id ?? line.text}>
              {line.text}
              <br />
            </React.Fragment>
          ))}
          <a href={mailto} data-cursor>
            {contact?.linkText}
          </a>
        </h2>
        {contact?.sub ? (
          <p className={`${styles.sub} reveal`}>{contact.sub}</p>
        ) : null}
        <div className={`${styles.links} reveal`}>
          {links.map((link) => (
            <a
              key={link.id ?? link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
            >
              {link.label} <span className={styles.arr}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
