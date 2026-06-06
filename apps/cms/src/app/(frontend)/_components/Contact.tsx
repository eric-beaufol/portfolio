import React from "react";
import { contact, identity } from "../_data/site";
import styles from "./Contact.module.css";

const mailto = `mailto:${identity.email}`;

export default function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="wrap">
        <span className={`eyebrow reveal ${styles.eyebrow}`}>
          {contact.eyebrow}
        </span>
        <h2 className={`${styles.big} reveal`}>
          {contact.lines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
          <a href={mailto} data-cursor>
            {contact.linkText}
          </a>
        </h2>
        <p className={`${styles.sub} reveal`}>{contact.sub}</p>
        <div className={`${styles.links} reveal`}>
          {contact.links.map((link) => (
            <a key={link.label} href={link.href} data-cursor>
              {link.label} <span className={styles.arr}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
