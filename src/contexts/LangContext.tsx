"use client";
import { createContext, useContext, useState } from "react";
import { tLangContextProviderProps, tLangContext, tLang } from "./types";

export const LangContext = createContext<tLangContext | null>(null);

const LangProvider = ({ children }: tLangContextProviderProps) => {
  const [lang, setLang] = useState<tLang>("english");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LangContext);

  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LangContextProvider"
    );
  }

  return context;
};

export default LangProvider;
