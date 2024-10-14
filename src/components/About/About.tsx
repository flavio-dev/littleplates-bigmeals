"use client";
import { useLanguageContext } from "@/contexts/LangContext";
import styles from "./About.module.css";

export const About = () => {
  const { lang } = useLanguageContext();

  return <div>{lang}</div>;
};

export default About;
