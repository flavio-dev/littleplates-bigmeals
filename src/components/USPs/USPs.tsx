"use client";
import { useLanguageContext } from "@/contexts/LangContext";
import styles from "./USPs.module.css";

export const USPs = () => {
  const { lang } = useLanguageContext();

  return <div>{lang}</div>;
};

export default USPs;
