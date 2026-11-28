"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { T, type Lang, type Translations } from "./translations";
import { LANG_COOKIE, isFrPath, isLocalized, withLang } from "./locale";

export type { Lang };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

const remember = (l: Lang) => {
  try { localStorage.setItem("attax-lang", l); } catch {}
  document.cookie = `${LANG_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
};

// LANGUE (28/11/2026) : sur les pages qui ont une adresse par langue (src/lib/locale.ts), c'est l'ADRESSE qui décide
// (« /clubs » = anglais, « /fr/clubs » = français) et `initial` vient du serveur : le français est dans le HTML servi,
// donc lisible par les moteurs de recherche. Changer de langue = changer d'adresse. Sur les autres pages (profil d'un
// joueur, ligue, invitation…), une seule adresse : la langue retenue dans le navigateur s'applique, comme avant.
export function LangProvider({ children, initial = "en" }: { children: ReactNode; initial?: Lang }) {
  const [lang, setLangState] = useState<Lang>(initial);

  useEffect(() => {
    const path = window.location.pathname;
    let saved: Lang | null = null;
    try { const s = localStorage.getItem("attax-lang"); if (s === "en" || s === "fr") saved = s; } catch {}
    if (isLocalized(path)) {
      // Un visiteur qui avait choisi le français avant les adresses /fr : on l'y emmène une fois.
      if (!isFrPath(path) && saved === "fr" && !document.cookie.includes(`${LANG_COOKIE}=`)) {
        remember("fr");
        window.location.replace(withLang(path, "fr") + window.location.search + window.location.hash);
        return;
      }
      // L'adresse fait foi : on la retient, pour que les liens internes restent dans la même langue.
      remember(isFrPath(path) ? "fr" : "en");
    } else if (saved && saved !== lang) {
      setLangState(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = (l: Lang) => {
    remember(l);
    const path = window.location.pathname;
    if (isLocalized(path)) {
      const next = withLang(path, l);
      if (next !== path) { window.location.assign(next + window.location.search + window.location.hash); return; }
    }
    setLangState(l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useT(): Translations {
  const { lang } = useContext(LangContext);
  return T[lang] as Translations;
}
