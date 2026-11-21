import type { CSSProperties } from "react";

const STAR_POINTS =
  "50,0 61,34 100,38 69,60 79,100 50,76 21,100 31,60 0,38 39,34";

interface StarProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

/** Pink four-to-five point star used for the logo and sparkles. */
export default function Star({ className, style, children }: StarProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <polygon points={STAR_POINTS} fill="currentColor" />
      {children}
    </svg>
  );
}
