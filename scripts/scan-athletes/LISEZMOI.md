# Athlètes en scanlines (public/scan/*.webp)

Les silhouettes du site viennent des images des carrousels (Desktop/Attax/socials). Elles sont dessinées
en lignes horizontales blanches sur fond transparent, puis colorées sur le site par masque CSS
(`src/components/scan/ScanAthlete.tsx`) : une seule image sert en bleu glacier sur noir, en encre sur clair, etc.

Pour en ajouter une :
1. Détourer l'image (fond blanc autour du sujet), par exemple avec rembg.
2. Ajouter une ligne dans `list.json` (`src` = nom du fichier sans .png, `name` = nom sur le site).
3. `SRC=<dossier des images détourées>/ node gen.mjs list.json out/` (nécessite `playwright`).
4. Recadrer au plus près, exporter en .webp dans `public/scan/` et ajouter ses dimensions dans
   `src/components/scan/athletes.ts`.

Réglages utilisés : `spacing` 12 (écart des lignes), `fill` 0.36 (épaisseur max), `contrast` 1.1.
