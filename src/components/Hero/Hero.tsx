"use client";
import { useLanguageContext } from "@/contexts/LangContext";
import Image from "next/image";
import styles from "./Hero.module.css";

export const Hero = () => {
  const { lang } = useLanguageContext();

  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>Food for the little curious minds</h1>
      <div className={styles.heroTiles}>
        <div className={styles.heroTileImage}>
          <Image
            src="/1.webp"
            width={200}
            height={300}
            alt="food"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className={styles.heroTileImage}>
          <Image
            src="/2.webp"
            width={200}
            height={300}
            alt="food"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className={styles.heroTileImage}>
          <Image
            src="/3.webp"
            width={200}
            height={300}
            alt="food"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className={styles.heroTileImage}>
          <Image
            src="/4.webp"
            width={200}
            height={300}
            alt="food"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className={styles.heroTileImage}>
          <Image
            src="/5.webp"
            width={200}
            height={300}
            alt="food"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className={styles.heroTileImage}>
          <Image
            src="/6.webp"
            width={200}
            height={300}
            alt="food"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
