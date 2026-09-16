/**
 * Pill-shaped action button. Spicy orange = primary CTA (예약/전화), Frost = secondary.
 * @startingPoint section="Core" subtitle="Pill buttons in all five brand variants" viewport="700x260"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = Spicy CTA, secondary = Frost, outline/quiet/ghost = supporting. */
  variant?: 'primary' | 'secondary' | 'outline' | 'quiet' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label. */
  icon?: string;
  /** Lucide icon name rendered after the label. */
  iconRight?: string;
  block?: boolean;
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
