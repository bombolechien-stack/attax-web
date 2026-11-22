// Athlètes en scanlines (générés depuis les images des carrousels, lignes blanches sur fond transparent).
// Utilisés comme masque CSS : la couleur est libre (bleu glacier sur noir, encre sur clair…).
// Régénérer : scripts/scan-athletes/ (voir LISEZMOI).
export const ATHLETES = {
  "basketball": { w: 256, h: 967 },
  "boxing": { w: 596, h: 1049 },
  "cycling": { w: 720, h: 832 },
  "deadlift": { w: 418, h: 1034 },
  "dive": { w: 628, h: 914 },
  "nordic-walk": { w: 586, h: 773 },
  "row": { w: 616, h: 535 },
  "run-2": { w: 576, h: 820 },
  "run-3": { w: 452, h: 762 },
  "run-woman": { w: 662, h: 831 },
  "run": { w: 500, h: 642 },
  "spin": { w: 640, h: 977 },
  "sprint": { w: 568, h: 931 },
  "swim-start": { w: 674, h: 843 },
  "tennis": { w: 648, h: 820 },
  "walk-senior": { w: 540, h: 941 },
  "wheelchair": { w: 526, h: 762 },
} as const;

export type AthleteName = keyof typeof ATHLETES;

// Ton des athlètes des en-têtes (22/11, scripts/hero-lines/athlete_tone.py) : alpha = noirceur de la photo, sans lignes ;
// les lignes fines du hero de l'accueil sont posées en CSS (Site.tsx → ScanBg, classe .scan-tone).
export const TONES = {
  "spin": { w: 743, h: 1210 },
  "basketball": { w: 312, h: 1203 },
  "tennis": { w: 759, h: 1017 },
  "cycling": { w: 900, h: 1005 },
  "sprint": { w: 780, h: 1229 },
  "run-woman": { w: 819, h: 1025 },
} as const;
export type ToneName = keyof typeof TONES;
