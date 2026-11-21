import type React from "react";
import Image from "next/image";

// Téléphone de l'accueil (passe 6) : le même cadre CSS que le haut de téléphone du hero (bords nets, île, barre d'état
// 9:41), et dedans une VRAIE capture de l'app (public/screens/story/<langue>/*.webp, 522 × 1017). Même taille partout.
/** baked = la capture contient déjà sa barre d'état (écrans de public/screens/app recadrés, 524 × 1072). */
export default function AppPhone({ src, alt, dark = false, baked = false, children }: { src?: string; alt?: string; dark?: boolean; baked?: boolean; children?: React.ReactNode }) {
  // Écran reproduit en HTML (children) sous la barre d'état : même cadre, même taille.
  if (children) return (
    <div className="ph6">
      <div className="ph6-screen ph6-html" style={{ background: dark ? "#0443FD" : "#EEF1F7" }}>
        <div className={`ph6-status${dark ? " is-dark" : ""}`} aria-hidden="true">
          <b>9:41</b><i className="ph6-island" /><span className="ph6-icons"><i /><i /><i /><em /></span>
        </div>
        {children}
      </div>
    </div>
  );
  if (baked) return (
    <div className="ph6">
      <div className="ph6-screen" style={{ background: dark ? "#0E141A" : "#EEF1F7" }}>
        <Image className="ph6-baked" src={src!} alt={alt ?? ""} width={524} height={1072} sizes="(max-width: 760px) 66vw, 280px" />
      </div>
    </div>
  );
  return (
    <div className="ph6">
      <div className="ph6-screen" style={{ background: dark ? "#0443FD" : "#EEF1F7" }}>
        <div className={`ph6-status${dark ? " is-dark" : ""}`} aria-hidden="true">
          <b>9:41</b><i className="ph6-island" /><span className="ph6-icons"><i /><i /><i /><em /></span>
        </div>
        <Image src={src!} alt={alt ?? ""} width={522} height={1017} sizes="(max-width: 760px) 66vw, 280px" />
      </div>
    </div>
  );
}
