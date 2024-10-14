import { Dispatch, SetStateAction } from "react";

export type tLangContextProviderProps = {
  children: React.ReactNode;
};

export type tLang = "english" | "deutsche";

export type tLangContext = {
  lang: tLang;
  setLang: Dispatch<SetStateAction<tLang>>;
};
