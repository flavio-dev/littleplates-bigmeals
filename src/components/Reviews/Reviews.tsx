"use client";
import { useLanguageContext } from "@/contexts/LangContext";
import styles from "./Reviews.module.css";

export const Reviews = () => {
  const { lang } = useLanguageContext();

  return <div>{lang}</div>;
};

export default Reviews;
