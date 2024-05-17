import styles from "./page.module.css";
import PhotographersSection from "@/app/discover-page/photographers-section/photographers-section";
import PhotosSection from "@/app/discover-page/photos-section/photos-section";
import HeroSection from "@/app/discover-page/hero-section/hero-section";

export default function Discover() {

  return (
      <main className={styles.main}>
          <HeroSection />
          <PhotographersSection />
          <PhotosSection />
      </main>
  );
}