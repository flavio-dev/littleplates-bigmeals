"use client";
import { useLanguageContext } from "@/contexts/LangContext";
import styles from "./Menu.module.css";

export const Menu = () => {
  const { lang } = useLanguageContext();

  return <div>{lang}</div>;
};

export default Menu;
