import styles from "./page.module.css";
import OrangeButton from "@/components/buttons/OrangeButton/OrangeButton";
import garageImage from "@/imgs/NavBar/garage.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <OrangeButton
        svgIcon={garageImage}
        altText="home"
        goToPage="@/app/page"
      />
    </main>
  );
}
