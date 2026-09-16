/** Circular icon-only button — close, call, favourite, overflow. */
export interface IconButtonProps {
  /** Lucide icon name. */
  name: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'quiet' | 'outline' | 'ghost' | 'solid';
  /** Accessible label — required in practice. */
  label?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
