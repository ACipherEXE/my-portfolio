import Image from "next/image";
import styles from "./page.module.css";
import OrangeButton from "@/components/buttons/OrangeButton/OrangeButton";
export default function Home() {
  return (
    <main className={styles.main}>
      <OrangeButton />
    </main>
  );
}
