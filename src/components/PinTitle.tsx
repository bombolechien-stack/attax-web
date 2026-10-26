/**
 * Titre de héros au style des pins réseaux sociaux :
 * lignes en Inter Tight serré, la dernière ligne en Instrument Serif italique (bleu glacier).
 * Le texte est découpé sur "\n" ; un titre d'une seule ligne reste entièrement en Inter Tight.
 */
export default function PinTitle({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => {
        const last = i === lines.length - 1 && lines.length > 1;
        return (
          <span key={i}>
            {last ? <em>{line}</em> : line}
            {i < lines.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
}
