"use client";

import styles from "..OrangeButton.module.css";
import Image from "next/image";

export default function OrangeButtonClient({
  svgIcon,
  altText,
  onClickFunction,
}) {
  <button
    className={styles.orange_button}
    onClick={onClickFunction ? onClickFunction : null}
  >
    <div className={styles.orange_button_interior}>
      <Image src={svgIcon} alt={altText} width="50" height="50" />
    </div>
  </button>;
}
