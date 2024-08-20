import Link from "next/link";
import Image from "next/image";
import styles from "./OrangeButton.module.css";
export default function OrangeButton({ svgIcon, altText, goToPage }) {
  return (
    <div>
      <Link href={"Projects"}>
        <button className={styles.orange_button}>
          <div className={styles.orange_button_interior}>
            <Image src={svgIcon} alt={altText} width="50" height="50" />
          </div>
        </button>
      </Link>
    </div>
  );
}
