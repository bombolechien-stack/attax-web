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
