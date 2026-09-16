/** Native select with brand chrome — 진료 항목, 시간대 선택. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Strings, or { value, label } objects. */
  options?: Array<string | { value: string; label: string }>;
  placeholder?: string;
  invalid?: boolean;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
