"use client";
import { useLanguageContext } from "@/contexts/LangContext";
import styles from "./Header.module.css";

export const Header = () => {
  const { lang, setLang } = useLanguageContext();

  return (
    <header className={`default-wrapper-width ${styles.header}`}>
      <div>Little Plates - Big Meals</div>
      <div>
        <span
          onClick={() => setLang("english")}
          className={lang === "deutsche" ? `${styles.langUnselected}` : ""}
        >
          EN
        </span>
        <span> | </span>
        <span
          onClick={() => setLang("deutsche")}
          className={lang === "english" ? `${styles.langUnselected}` : ""}
        >
          DE
        </span>
      </div>
    </header>
  );
};

export default Header;
