/** Single-line text field, 12px radius, frost focus ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Lucide icon name shown inside, on the left. */
  icon?: string;
  invalid?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
