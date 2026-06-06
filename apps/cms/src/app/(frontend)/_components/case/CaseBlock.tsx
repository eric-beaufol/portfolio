import React from "react";
import styles from "./Case.module.css";

type CaseBlockProps = {
  label: string;
  heading: string;
  children: React.ReactNode;
};

/** Bloc de contenu case : label mono + corps (h3 + contenu). */
export default function CaseBlock({ label, heading, children }: CaseBlockProps) {
  return (
    <div className={`${styles.block} reveal`}>
      <div className={styles.label}>{label}</div>
      <div className={styles.body}>
        <h3>{heading}</h3>
        {children}
      </div>
    </div>
  );
}
