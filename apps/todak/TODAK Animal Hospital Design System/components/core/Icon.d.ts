/** Line icon from the 2px-stroke medical/care set. Renders a Lucide glyph inheriting currentColor. */
export interface IconProps {
  /** Lucide icon name, kebab-case, e.g. "paw-print", "stethoscope", "syringe". */
  name?: string;
  /** Pixel box. 16 / 20 / 24 are the system sizes. */
  size?: number;
  /** Stroke weight. Brand default is 2. */
  strokeWidth?: number;
  color?: string;
  title?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
