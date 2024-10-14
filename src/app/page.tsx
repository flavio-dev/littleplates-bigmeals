import Header from "@/components/Header";
import Link from "next/link";
import styles from "./page.module.css";
import LangProvider from "@/contexts/LangContext";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import USPs from "@/components/USPs";

export default function Home() {
  return (
    <LangProvider>
      <Header />
      <main className={`default-wrapper-width ${styles.main}`}>
        <Hero />
        <About />
        <USPs />
        <Menu />
        <Reviews />
      </main>
      <footer className={styles.footer}>
        <Link href="/contact">contact us</Link>
      </footer>
    </LangProvider>
  );
}
