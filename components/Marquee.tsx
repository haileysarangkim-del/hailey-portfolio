interface MarqueeProps {
  /** Text that repeats across the band. */
  text: string;
  /** Scroll direction. */
  reverse?: boolean;
}

const STAR = "50,0 61,34 100,38 69,60 79,100 50,76 21,100 31,60 0,38 39,34";
const REPEATS = 6;

function Group({ text }: { text: string }) {
  return (
    <div className="marquee-group" aria-hidden="true">
      {Array.from({ length: REPEATS }, (_, i) => (
        <span className="marquee-item" key={i}>
          <span className="marquee-text">{text}</span>
          <svg viewBox="0 0 100 100" className="marquee-star">
            <polygon points={STAR} fill="currentColor" className="spin-star" />
          </svg>
        </span>
      ))}
    </div>
  );
}

/** Endlessly scrolling banner of repeating text and stars. */
export default function Marquee({ text, reverse = false }: MarqueeProps) {
  return (
    <div className={`marquee${reverse ? " marquee-reverse" : ""}`}>
      <div className="marquee-track">
        <Group text={text} />
        <Group text={text} />
      </div>
    </div>
  );
}
